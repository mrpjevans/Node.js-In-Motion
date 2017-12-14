'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.createTable(
            'Fonts',
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                name: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                link: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                css: {
                    type: Sequelize.STRING,
                    allowNull: false
                }
            }
        );
    },

    down: function (queryInterface) {
        queryInterface.dropTable('Fonts');
    }
};
