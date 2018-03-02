'use strict';
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
  return Users;
};