'use strict';

const bcrypt = require('bcrypt-promise');
const nodemailer = require('nodemailer');

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        primaryKey: true,
        validate: {
            notEmpty: true,
            isUnique(value, next) {
                // Are there are records that use my username?
                Users.find({
                    where: {username: value},
                }).then((user) => {
                    // If a user is found and we are inserting or (updating and this is not our ID), fail
                    if (user && (this.id == null || user.id != this.id)) {
                        console.log(this.id + '!');
                        next('username_in_use');
                    } else {
                        next();
                    }
                });
            }
        }
    },
    password_digest: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true,
        }
    },
    password: {
        type: DataTypes.VIRTUAL,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    confirm_password: {
        type: DataTypes.VIRTUAL,
        allowNull: false,
        validate: {
            notEmpty: true,
            matchesPassword(value, next) {
                // Check the password fields match
                if (this.password != this.confirm_password) {
                    next('password_mismatch');
                } else {
                    // Now encrypt the password and store it
                    bcrypt.hash(this.password, 10)
                    .then((hash) => {
                        this.password_digest = hash;
                        next();
                    });
                }

            }
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
    role: {
        type: DataTypes.ENUM('Admin','User'),
        allowNull: false,
        defaultValue: 'Out',
        validate: {
            isIn: [['Admin','User']]
        }
    },
    status: {
        type: DataTypes.ENUM('In','Out','Busy'),
        allowNull: false,
        defaultValue: 'Out',
        validate: {
            isIn: [['In','Out','Busy']]
        }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Users.auth = async (username, password) => {

    const userResult = await Users.findOne({
        where: {username: username}
    });

    if (userResult === null) {
        return null;
    }

    const isCorrectPassword = await bcrypt.compare(password, userResult.password_digest);
    if (!isCorrectPassword) {
        return null;
    }

    return userResult;

  }

  Users.welcomeEmail = async (username) => {

    const userResult = await Users.findOne({
        where: {username: username}
    });

    const body = `Hi, ${userResult.name}. You are now registered on Hello, World!`;

    const transport = nodemailer.createTransport({
        host: 'SMTP HOST',
        secure: true,
        auth: {
            user: 'USERNAME',
            pass: 'PASSWORD'
        }
    });

    const mailOptions = {
      from: 'admin@nodejsinmotion.org',
      to: userResult.email,
      subject: 'Welcome to Hello, World!',
      text: body
    };

    await transport.sendMail(mailOptions);

  }
  
  return Users;
};