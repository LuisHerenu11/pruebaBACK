'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('materia', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        nombre: {
            type: Sequelize.STRING
        },
        cuatrimestral: {
            type: Sequelize.BOOLEAN
        },
        anio: {
            type: Sequelize.INTEGER
        }
        ,
        carreraId: {
            type: Sequelize.INTEGER
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
        return queryInterface.dropTable('materia');
    }
};