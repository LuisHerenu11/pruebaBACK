'use strict';
module.exports = (sequelize, DataTypes) => {
    const profesor = sequelize.define('profesor', {
        nombre: DataTypes.STRING,
        fechaNacimiento: DataTypes.DATE,
        legajo: DataTypes.INTEGER,
        activo: DataTypes.BOOLEAN
    }, {tableName: 'profesores'});

    return profesor;
};