//este user.model.js define el esquema y el modelo de datos para los usuarios en MongoDB usando Mongoose

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ //definimos el esquema de datos para los usuarios
    nombre: {type : String, required: true},
    correo: {type : String, required: true}, // se usa unique para que no se repitan correos
    edad: {type : Number, required: true},
},{ collection: 'usuarios', // especificar el nombre de la colección en MongoDB exacto al de la base de datos
});
const User = mongoose.model('User', userSchema); // este comando sirve para crear el modelo de datos user basado en el esquema userSchema que definimos antes
module.exports = User; // exportamos el modelo para poder usarlo en otros archivos

/*si quiero añadir otro esquema por ejemplo llamada producto que ya tengo en mi base de datos es decir tengo una colección llamada "producto" y otra "usuarios" seria igual a 

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  categoria: { type: String, required: true },
}, {
  collection: 'producto', // el nombre exacto de la colección en MongoDB
  versionKey: false
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product; */