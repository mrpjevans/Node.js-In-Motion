'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.createTable(
            'Translations',
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                language: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                languageCode: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                translation: {
                    type: Sequelize.STRING,
                }
            }
        );
    },

    down: function (queryInterface) {
        queryInterface.dropTable('Translations');
    }
};
