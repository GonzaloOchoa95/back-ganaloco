const mongoose = require('mongoose');

require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI); // Sin opciones obsoletas
    console.log('Conexión exitosa a MongoDB Atlas');
   
  } catch (error) {
    console.error('Error de conexión a MongoDB:', error);
    process.exit(1); // Termina el proceso si hay un error
  }
};

module.exports = connectDB;