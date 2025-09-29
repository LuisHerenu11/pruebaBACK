'use strict';
module.exports = (sequelize, DataTypes) => {
    const carrera = sequelize.define('carrera', {
        nombre: DataTypes.STRING,
        grado: DataTypes.STRING,
        universidad: DataTypes.STRING,
    }, {tableName: 'carreras'});

    carrera.associate = function(models){
    carrera.hasMany(models.materia,{
        as: 'materias',
        foreignKey: 'carreraId'
    })
    };

    return carrera;
};