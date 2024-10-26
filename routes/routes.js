const express = require('express');
const router = express.Router();
const validarController = require('./controllers/validarController.js');
router
    // .get('/', signoController.getAllSignos)
    // .get('/:categoriaU/:signoU', signoController.getOneSigno)
    .post('/codigo', validarController.registarCodigo)
    .post('/registro', validarController.registroCredenciales)
    .post('/login',validarController.validarCredenciales)
    .post('/registroadmin',validarController.registarAdmin)
    .get('/traer/:valor',validarController.ganadores)
    .get('/traerusuario/:iduser',validarController.renderizar)
    .post('/generar',validarController.generarCodigo)

    // .patch('/restablecer', validarController.editarContrasena)

module.exports = router;