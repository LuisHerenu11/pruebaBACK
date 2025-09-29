'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('profesores', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        nombre: {
            type: Sequelize.STRING
        },
        fechaNacimiento: {
            type: Sequelize.DATE
        },
        legajo: {
            type: Sequelize.INTEGER
        },
        activo: {
            type: Sequelize.BOOLEAN
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('profesores');
    }
};