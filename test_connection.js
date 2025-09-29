const sequelize = require('./config/configSequelize');

sequelize.authenticate()
    .then(() => console.log('Conexión exitosa a MariaDB'))
    .catch(err => console.error('Error al conectar:', err));