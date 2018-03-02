'use strict';
module.exports = function(sequelize, DataTypes) {
  var Fonts = sequelize.define('Fonts', {
    name: DataTypes.STRING,
    link: DataTypes.STRING,
    css: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Fonts.getRandomFont = async () => {
    const fontResult = await Fonts.findOne({
        order: [
            sequelize.fn('RANDOM')
        ]
    });
    return fontResult.toJSON();
  }

  return Fonts;
};