'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   
        return queryInterface.bulkInsert('Fonts',[
            {
                name: 'Bellefair',
                link: 'https://fonts.googleapis.com/css?family=Bellefair',
                css: 'font-family: \'Bellefair\', serif;',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Fresca',
                link: 'https://fonts.googleapis.com/css?family=Fresca',
                css: 'font-family: \'Fresca\', sans-serif;',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Abel',
                link: 'https://fonts.googleapis.com/css?family=Abel',
                css: 'font-family: \'Abel\', sans-serif;',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Anton',
                link: 'https://fonts.googleapis.com/css?family=Anton',
                css: 'font-family: \'Anton\', sans-serif;',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Catamaran',
                link: 'https://fonts.googleapis.com/css?family=Catamaran',
                css: 'font-family: \'Catamaran\', sans-serif;',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Exo 2',
                link: 'https://fonts.googleapis.com/css?family=Exo+2',
                css: 'font-family: \'Exo 2\', sans-serif;',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Indie Flower',
                link: 'https://fonts.googleapis.com/css?family=Indie+Flower',
                css: 'font-family: \'Indie Flower\', cursive;',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Lobster',
                link: 'https://fonts.googleapis.com/css?family=Lobster',
                css: 'font-family: \'Lobster\', cursive;',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Pacifico',
                link: 'https://fonts.googleapis.com/css?family=Pacifico',
                css: 'font-family: \'Pacifico\', cursive;',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: function (queryInterface) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
        return queryInterface.bulkDelete('Fonts', null, {});
    }
};
