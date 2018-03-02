'use strict';

const request = require('request-promise-native');

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

    Translations.getRandomTranslation = async (config) => {

        // Get a random translation from the database
        const transResult = await Translations.findOne({
            order: [
                sequelize.fn('RANDOM'),
            ]
        });
        let trans = transResult.toJSON();

        // Do we need to translate on-the-fly?
        if (trans.translation == null) {

            // Call the API
            const escapedHelloWorld = encodeURIComponent('Hello, World');
            var getString = `${config.yandex.uri}?key=${config.yandex.apikey}&lang=en-${trans.languageCode}&text=${escapedHelloWorld}`;

            // Make the request
            const apiCallResult = await request.get({uri: getString, json: true});

            // Add the translation to the database
            trans.translation = apiCallResult.text[0];
            await Translations.update(
                {translation: trans.translation},
                {where: {id: trans.id}}
            );

        }

        return trans;

    }

  return Translations;
};