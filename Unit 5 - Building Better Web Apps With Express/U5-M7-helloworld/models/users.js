'use strict';
const bcrypt = require('bcrypt-promise');

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    username: DataTypes.STRING,
    password_digest: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.ENUM('Admin','User'),
    status: DataTypes.ENUM('In','Out','Busy')
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


  return Users;
};