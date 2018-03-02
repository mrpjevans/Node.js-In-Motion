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
   
        // As blocking is not important here, we'll use the 'sync' method
        const bcrypt = require('bcrypt');
        const salt = bcrypt.genSaltSync(10);

        return queryInterface.bulkInsert('Users',[{
            username: 'admin',
            password_digest: bcrypt.hashSync('admin', salt),
            name: 'Admin',
            email: 'admin@nodejsinmotion.org',
            role: 'Admin',
            status: 'Out',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            username: 'john',
            password_digest: bcrypt.hashSync('john', salt),
            name: 'John',
            email: 'john@nodejsinmotion.org',
            role: 'User',
            status: 'Out',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            username: 'jane',
            password_digest: bcrypt.hashSync('jane', salt),
            name: 'Jane',
            email: 'jane@nodejsinmotion.org',
            role: 'User',
            status: 'Out',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            username: 'pj',
            password_digest: bcrypt.hashSync('pj', salt),
            name: 'PJ',
            email: 'pj@nodejsinmotion.org',
            role: 'Admin',
            status: 'Out',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            username: 'trish',
            password_digest: bcrypt.hashSync('trish', salt),
            name: 'Trish',
            email: 'trish@nodejsinmotion.org',
            role: 'User',
            status: 'Out',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            username: 'patrick',
            password_digest: bcrypt.hashSync('patrick', salt),
            name: 'Patrick',
            email: 'patrick@nodejsinmotion.org',
            role: 'User',
            status: 'Out',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);

    },

    down: function (queryInterface) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
        return queryInterface.bulkDelete('Users', null, {});
    }
};
