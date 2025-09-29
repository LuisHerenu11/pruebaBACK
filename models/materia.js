'use strict';
module.exports = (sequelize, DataTypes) => {
    const materia = sequelize.define('materia', {
        nombre: DataTypes.STRING,
        cuatrimestral: DataTypes.BOOLEAN,
        anio: DataTypes.INTEGER,
        carreraId: DataTypes.INTEGER
    }, {});

    materia.associate = function(models) {
        materia.belongsTo(models.carrera,{
            as: 'carrera_relacionada',
            foreignKey:'carreraId'
        })
    };

    return materia;
};