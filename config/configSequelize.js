const config = require('./config.json')[process.env.NODE_ENV || 'development'];
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,  // dialecto para MariaDB
        logging: false,  // Desactiva logs SQL en consola (opcional)
    }
);

module.exports = sequelize;