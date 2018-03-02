'use strict';

module.exports = {
    up: function (queryInterface) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   
        return queryInterface.bulkInsert('Translations',[
            {language: 'Azerbaijan', languageCode: 'az', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Malayalam', languageCode: 'ml', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Albanian', languageCode: 'sq', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Maltese', languageCode: 'mt', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Amharic', languageCode: 'am', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Macedonian', languageCode: 'mk', createdAt: new Date(), updatedAt: new Date()},
            {language: 'English', languageCode: 'en', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Maori', languageCode: 'mi', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Arabic', languageCode: 'ar', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Marathi', languageCode: 'mr', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Armenian', languageCode: 'hy', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Mari', languageCode: 'mhr', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Afrikaans', languageCode: 'af', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Mongolian', languageCode: 'mn', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Basque', languageCode: 'eu', createdAt: new Date(), updatedAt: new Date()},
            {language: 'German', languageCode: 'de', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Bashkir', languageCode: 'ba', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Nepali', languageCode: 'ne', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Belarusian', languageCode: 'be', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Norwegian', languageCode: 'no', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Bengali', languageCode: 'bn', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Punjabi', languageCode: 'pa', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Burmese', languageCode: 'my', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Papiamento', languageCode: 'pa', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Bulgarian', languageCode: 'bg', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Persian', languageCode: 'fa', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Bosnian', languageCode: 'bs', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Polish', languageCode: 'pl', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Welsh', languageCode: 'cy', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Portuguese', languageCode: 'pt', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Hungarian', languageCode: 'hu', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Romanian', languageCode: 'ro', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Vietnamese', languageCode: 'vi', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Russian', languageCode: 'ru', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Haitian (Creole)', languageCode: 'ht', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Cebuano', languageCode: 'ceb', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Galician', languageCode: 'gl', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Serbian', languageCode: 'sr', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Dutch', languageCode: 'nl', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Sinhala', languageCode: 'si', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Hill Mari', languageCode: 'mrj', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Slovakian', languageCode: 'sk', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Greek', languageCode: 'el', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Slovenian', languageCode: 'sl', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Georgian', languageCode: 'ka', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Swahili', languageCode: 'sw', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Gujarati', languageCode: 'gu', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Sundanese', languageCode: 'su', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Danish', languageCode: 'da', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Tajik', languageCode: 'tg', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Hebrew', languageCode: 'he', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Thai', languageCode: 'th', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Yiddish', languageCode: 'yi', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Tagalog', languageCode: 'tl', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Indonesian', languageCode: 'id', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Tamil', languageCode: 'ta', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Irish', languageCode: 'ga', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Tatar', languageCode: 'tt', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Italian', languageCode: 'it', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Telugu', languageCode: 'te', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Icelandic', languageCode: 'is', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Turkish', languageCode: 'tr', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Spanish', languageCode: 'es', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Udmurt', languageCode: 'udm', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Kazakh', languageCode: 'kk', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Uzbek', languageCode: 'uz', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Kannada', languageCode: 'kn', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Ukrainian', languageCode: 'uk', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Catalan', languageCode: 'ca', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Urdu', languageCode: 'ur', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Kyrgyz', languageCode: 'ky', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Finnish', languageCode: 'fi', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Chinese', languageCode: 'zh', createdAt: new Date(), updatedAt: new Date()},
            {language: 'French', languageCode: 'fr', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Korean', languageCode: 'ko', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Hindi', languageCode: 'hi', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Xhosa', languageCode: 'xh', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Croatian', languageCode: 'hr', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Khmer', languageCode: 'km', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Czech', languageCode: 'cs', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Laotian', languageCode: 'lo', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Swedish', languageCode: 'sv', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Latin', languageCode: 'la', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Scottish', languageCode: 'gd', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Latvian', languageCode: 'lv', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Estonian', languageCode: 'et', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Lithuanian', languageCode: 'lt', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Esperanto', languageCode: 'eo', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Luxembourgish', languageCode: 'lb', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Javanese', languageCode: 'jv', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Malagasy', languageCode: 'mg', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Japanese', languageCode: 'ja', createdAt: new Date(), updatedAt: new Date()},
            {language: 'Malay', languageCode: 'ms', createdAt: new Date(), updatedAt: new Date()}
        ]);

    },

    down: function (queryInterface) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
        return queryInterface.bulkDelete('Translations', null, {});
    }
};
