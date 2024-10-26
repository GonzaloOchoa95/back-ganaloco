const express = require('express');
const mongoose = require('mongoose');
const { urlencoded, json } = require('express');
const router = require('./routes/routes.js');
const cors = require('cors');

const port = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('MONGODB_URI no está definido en las variables de entorno');
  process.exit(1);
}

mongoose.connect(MONGODB_URI, {})
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => {
    console.error('Error conectando a MongoDB:', err);
    process.exit(1);
  });

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/v1/signos', router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
}).on('error', (err) => {
  console.error('Error al iniciar el servidor:', err);
  process.exit(1);
});