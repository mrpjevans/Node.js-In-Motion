'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.createTable(
            'Users',
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                username: {
                    type: Sequelize.STRING,
                    unique: true
                },
                password_digest: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                name: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                email: {
                    type: Sequelize.STRING,
                    allowNull: true
                },
                role: {
                    type: Sequelize.ENUM('Admin','User'),
                    allowNull: false,
                    defaultValue: 'ADMIN'
                },
                status: {
                    type: Sequelize.ENUM('In','Out','Busy'),
                    allowNull: false,
                    defaultValue: 'Out'
                },
                createdAt: {
                    type: Sequelize.DATE
                },
                updatedAt: {
                    type: Sequelize.DATE
                }
            }
        );
    },

    down: function (queryInterface) {
        queryInterface.dropTable('Users');
    }
};
