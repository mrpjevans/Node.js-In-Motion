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

    return queryInterface.bulkInsert('cheeses', [
        {name: 'Cheddar', origin: 'United Kingdom', createdAt: new Date(), updatedAt: new Date()},
        {name: 'Wensleydale', origin: 'United Kingdom', createdAt: new Date(), updatedAt: new Date()},
        {name: 'Red Leicester', origin: 'United Kingdom', createdAt: new Date(), updatedAt: new Date()},
        {name: 'Stilton', origin: 'United Kingdom', createdAt: new Date(), updatedAt: new Date()},
        {name: 'Oxford Blue', origin: 'United Kingdom', createdAt: new Date(), updatedAt: new Date()},
        {name: 'Brie', origin: 'United Kingdom', createdAt: new Date(), updatedAt: new Date()},
        {name: 'Cheshire', origin: 'United Kingdom', createdAt: new Date(), updatedAt: new Date()},
        {name: 'Brie', origin: 'France', createdAt: new Date(), updatedAt: new Date()},
        {name: 'Leerdammer', origin: 'Netherlands', createdAt: new Date(), updatedAt: new Date()},
        {name: 'Monteray Jack', origin: 'USA', createdAt: new Date(), updatedAt: new Date()},
        {name: 'Roquefort', origin: 'France', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
