'use strict'

var express = require('express');
var compracontroller = require('../controllers/compra');
var token = require('../helpers/token');

var application = express.Router();

application.post('/compra/create', compracontroller.createCompra);

application.put('/compra/edit', compracontroller.updateCompra);

application.delete('/compra/delete', compracontroller.deleteCompra);

application.get('/compra/all', compracontroller.findAllCompra);

application.get('/compra/:id', compracontroller.findByIdCompra);

application.get('/compraProveedorId/:proveedorId', compracontroller.findByProveedorIdCompra);

module.exports = application;
