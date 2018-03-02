'use strict';
module.exports = function(sequelize, DataTypes) {
  var cheese = sequelize.define('cheese', {
    name: DataTypes.STRING,
    origin: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  // Here we extend the model at add our business logic
  cheese.uniqueCountries = () => {
    return cheese.aggregate('origin', 'DISTINCT', { plain: false });
  };

  return cheese;
};