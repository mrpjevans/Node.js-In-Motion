'use strict';
module.exports = function(sequelize, DataTypes) {
  var Translations = sequelize.define('Translations', {
    language: DataTypes.STRING,
    languageCode: DataTypes.STRING,
    translation: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Translations;
};