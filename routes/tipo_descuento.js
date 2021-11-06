'use strict'

var express = require('express');
var tipoDescuentocontroller = require('../controllers/tipo_descuento');
var token = require('../helpers/token');

var application = express.Router();

application.post('/tipoDescuento/create', tipoDescuentocontroller.createTipoDescuento);

application.put('/tipoDescuento/edit', tipoDescuentocontroller.updateTipoDescuento);

application.delete('/tipoDescuento/delete', tipoDescuentocontroller.deleteTipoDescuento);

application.get('/tipoDescuento/all', tipoDescuentocontroller.findAllTipoDescuento);

application.get('/tipoDescuento/:id', tipoDescuentocontroller.findByIdTipoDescuento);

module.exports = application;
