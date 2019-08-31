'use strict';

const express = require('express');
const router = express.Router();
const encargadosController = require('../controllers/encargadosController');

router.get('/', encargadosController.getEncargados );

router.post('/', encargadosController.crearEncargado );

router.delete('/:enc_rut', encargadosController.eliminarEncargado );


module.exports = router;
