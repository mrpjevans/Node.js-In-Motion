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
            {language: 'Azerbaijan', languageCode: 'az'},
            {language: 'Malayalam', languageCode: 'ml'},
            {language: 'Albanian', languageCode: 'sq'},
            {language: 'Maltese', languageCode: 'mt'},
            {language: 'Amharic', languageCode: 'am'},
            {language: 'Macedonian', languageCode: 'mk'},
            {language: 'English', languageCode: 'en'},
            {language: 'Maori', languageCode: 'mi'},
            {language: 'Arabic', languageCode: 'ar'},
            {language: 'Marathi', languageCode: 'mr'},
            {language: 'Armenian', languageCode: 'hy'},
            {language: 'Mari', languageCode: 'mhr'},
            {language: 'Afrikaans', languageCode: 'af'},
            {language: 'Mongolian', languageCode: 'mn'},
            {language: 'Basque', languageCode: 'eu'},
            {language: 'German', languageCode: 'de'},
            {language: 'Bashkir', languageCode: 'ba'},
            {language: 'Nepali', languageCode: 'ne'},
            {language: 'Belarusian', languageCode: 'be'},
            {language: 'Norwegian', languageCode: 'no'},
            {language: 'Bengali', languageCode: 'bn'},
            {language: 'Punjabi', languageCode: 'pa'},
            {language: 'Burmese', languageCode: 'my'},
            {language: 'Papiamento', languageCode: 'pa'},
            {language: 'Bulgarian', languageCode: 'bg'},
            {language: 'Persian', languageCode: 'fa'},
            {language: 'Bosnian', languageCode: 'bs'},
            {language: 'Polish', languageCode: 'pl'},
            {language: 'Welsh', languageCode: 'cy'},
            {language: 'Portuguese', languageCode: 'pt'},
            {language: 'Hungarian', languageCode: 'hu'},
            {language: 'Romanian', languageCode: 'ro'},
            {language: 'Vietnamese', languageCode: 'vi'},
            {language: 'Russian', languageCode: 'ru'},
            {language: 'Haitian (Creole)', languageCode: 'ht'},
            {language: 'Cebuano', languageCode: 'ceb'},
            {language: 'Galician', languageCode: 'gl'},
            {language: 'Serbian', languageCode: 'sr'},
            {language: 'Dutch', languageCode: 'nl'},
            {language: 'Sinhala', languageCode: 'si'},
            {language: 'Hill Mari', languageCode: 'mrj'},
            {language: 'Slovakian', languageCode: 'sk'},
            {language: 'Greek', languageCode: 'el'},
            {language: 'Slovenian', languageCode: 'sl'},
            {language: 'Georgian', languageCode: 'ka'},
            {language: 'Swahili', languageCode: 'sw'},
            {language: 'Gujarati', languageCode: 'gu'},
            {language: 'Sundanese', languageCode: 'su'},
            {language: 'Danish', languageCode: 'da'},
            {language: 'Tajik', languageCode: 'tg'},
            {language: 'Hebrew', languageCode: 'he'},
            {language: 'Thai', languageCode: 'th'},
            {language: 'Yiddish', languageCode: 'yi'},
            {language: 'Tagalog', languageCode: 'tl'},
            {language: 'Indonesian', languageCode: 'id'},
            {language: 'Tamil', languageCode: 'ta'},
            {language: 'Irish', languageCode: 'ga'},
            {language: 'Tatar', languageCode: 'tt'},
            {language: 'Italian', languageCode: 'it'},
            {language: 'Telugu', languageCode: 'te'},
            {language: 'Icelandic', languageCode: 'is'},
            {language: 'Turkish', languageCode: 'tr'},
            {language: 'Spanish', languageCode: 'es'},
            {language: 'Udmurt', languageCode: 'udm'},
            {language: 'Kazakh', languageCode: 'kk'},
            {language: 'Uzbek', languageCode: 'uz'},
            {language: 'Kannada', languageCode: 'kn'},
            {language: 'Ukrainian', languageCode: 'uk'},
            {language: 'Catalan', languageCode: 'ca'},
            {language: 'Urdu', languageCode: 'ur'},
            {language: 'Kyrgyz', languageCode: 'ky'},
            {language: 'Finnish', languageCode: 'fi'},
            {language: 'Chinese', languageCode: 'zh'},
            {language: 'French', languageCode: 'fr'},
            {language: 'Korean', languageCode: 'ko'},
            {language: 'Hindi', languageCode: 'hi'},
            {language: 'Xhosa', languageCode: 'xh'},
            {language: 'Croatian', languageCode: 'hr'},
            {language: 'Khmer', languageCode: 'km'},
            {language: 'Czech', languageCode: 'cs'},
            {language: 'Laotian', languageCode: 'lo'},
            {language: 'Swedish', languageCode: 'sv'},
            {language: 'Latin', languageCode: 'la'},
            {language: 'Scottish', languageCode: 'gd'},
            {language: 'Latvian', languageCode: 'lv'},
            {language: 'Estonian', languageCode: 'et'},
            {language: 'Lithuanian', languageCode: 'lt'},
            {language: 'Esperanto', languageCode: 'eo'},
            {language: 'Luxembourgish', languageCode: 'lb'},
            {language: 'Javanese', languageCode: 'jv'},
            {language: 'Malagasy', languageCode: 'mg'},
            {language: 'Japanese', languageCode: 'ja'},
            {language: 'Malay', languageCode: 'ms'}
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
