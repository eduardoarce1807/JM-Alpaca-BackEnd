'use strict'

var express = require('express');
var compraTotalcontroller = require('../controllers/compraTotal');
var token = require('../helpers/token');

var application = express.Router();

application.post('/compraTotal/create', compraTotalcontroller.createCompraTotal);

application.put('/compraTotal/edit', compraTotalcontroller.updateCompraTotal);

application.delete('/compraTotal/delete', compraTotalcontroller.deleteCompraTotal);

application.get('/compraTotal/all', compraTotalcontroller.findAllCompraTotal);

application.get('/compraTotal/:id', compraTotalcontroller.findByIdCompraTotal);

application.get('/compraTotalProveedorId/:proveedorId', compraTotalcontroller.findByProveedorIdCompraTotal);

module.exports = application;
