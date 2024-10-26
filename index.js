const express = require('express');
const connectDB = require('./db/mongo');
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const expressjwt = require('express-jwt')
const {urlencoded, json} = require('express');
const router = require('./routes/routes.js');
const cors = require('cors');

const port = process.env.PORT;
connectDB();

const app = express();
app.use(express.json())


app.use(urlencoded({extended: true}))

app.get('/', async (req, res) => {
    res.send("Prueba que funciona");
  });

app.use(cors())
app.use('/v1/signos', router);



app.listen(port, ()=>{
    console.log('listening at port 4000');
})