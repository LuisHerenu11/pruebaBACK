const sequelize = require('./config');
const Usuario = require('./src/models/Usuario');

(async () => {
    await sequelize.sync({ alter: true });  
    // Crea/altera tablas (usa { force: true } para resetear, pero con cuidado)
    console.log('Modelos sincronizados');

    // Crear un usuario
    const nuevoUsuario = await Usuario.create({
    nombre: 'Gustavo Ramos',
    email: 'gusti@gmail.com',
    });
    console.log('Usuario creado:', nuevoUsuario.toJSON());
})();