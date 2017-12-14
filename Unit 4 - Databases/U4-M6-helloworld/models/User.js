const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            username: {
                type: DataTypes.STRING,
                primaryKey: true,
                validate: {
                    notEmpty: true
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
            classMethods:{

            },
        });
    return User;
};
