// Este archivo define las rutas para manejar las operaciones relacionadas con los usuarios en la API RESTful utilizando Express y Mongoose.
    
const express = require('express'); // Importar Express
const router = express.Router(); // Crear un enrutador de Express que eso es un objeto que permite definir rutas modulares
const User = require('../models/user.model'); // Importar el modelo de usuario
//const Product = require('../models/product.model'); // Importar el modelo de producto si es necesario si tenemos otra colección llamada producto revisar antes el user.model.js
// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => { // Definir una ruta GET en la raíz del enrutador
    try {
        const users = await User.find(); // Buscar todos los usuarios en la base de datos
        res.json(users); // Enviar la lista de usuarios como respuesta JSON para la solicitud
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios', error }); // Manejar errores y enviar una respuesta de error
    }
});

// Ruta para crear un nuevo usuario
router.post('/', async (req, res) => { // Definir una ruta POST en la raíz del enrutador
    try {
        const { nombre, correo, edad } = req.body; // Extraer los datos del cuerpo de la solicitud
        const NuevoUsuario = new User({ nombre, correo, edad }); // Crear una nueva instancia del modelo de usuario
        await NuevoUsuario.save(); // Guardar el nuevo usuario en la base de datos
        res.status(201).json(NuevoUsuario); // sirve para indicar que se ha creado un recurso correctamente se usa 201 para creación exitosa
    } catch (error) {
        console.error('❌ Error al crear usuario:', error);
        res.status(500).json({ message: 'Error al crear usuario', error }); // Manejar errores y enviar una respuesta de error se usa 500 para errores del servidor
    }
});

module.exports = router; // Exportar el enrutador para usarlo en otros archivos