const express = require('express');
const connectDB = require('./db/mongo');
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const expressjwt = require('express-jwt')
const {urlencoded, json} = require('express');
const router = require('./routes/routes.js');
const cors = require('cors');

//const port = process.env.PORT;
//connectDB();

mongoose.connect('mongodb+srv://adm:Cali23809667*@bd-ganaloco.a9awg.mongodb.net/bd-ganaloco?retryWrites=true&w=majority&appName=bd-ganaloco',{})

const app = express();
app.use(express.json())


app.use(urlencoded({extended: true}))

//app.use(cors())
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
app.use('/v1/signos', router);



app.listen(port, ()=>{
    console.log('listening at port 4000');
})