require('dotenv').config(); // Cargar variables de entorno desde el archivo .env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importar el paquete cors
const userRoutes = require('./routes/userRoutes'); // asegúrate que el nombre del archivo es exactamente userRoutes.js

const app = express();

// Middleware
app.use(cors()); // Habilitar CORS para todas las rutas
app.use(express.json());


// Rutas
app.use('/api/users', userRoutes);

// Puerto
const PORT = process.env.PORT || 3000;

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ Conectado a la base de datos MongoDB ATLAS');
        app.listen(PORT, () => console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`));
    })
    .catch((error) => console.error('❌ Error al conectar a la base de datos MongoDB:', error));

// Ruta principal
app.get('/', (req, res) => res.send('Servidor funcionando  MUY ASPERO 🚀'));
