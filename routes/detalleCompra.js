'use strict'

var express = require('express');
var detalleCompracontroller = require('../controllers/detalleCompra');
var token = require('../helpers/token');

var application = express.Router();

application.post('/detalleCompra/create', detalleCompracontroller.createDetalleCompra);

application.put('/detalleCompra/edit', detalleCompracontroller.updateDetalleCompra);

application.delete('/detalleCompra/delete', detalleCompracontroller.deleteDetalleCompra);

application.get('/detalleCompra/all', detalleCompracontroller.findAllDetalleCompra);

application.get('/detalleCompra/:id', detalleCompracontroller.findByIdDetalleCompra);

application.get('/detalleCompraProveedorId/:proveedorId', detalleCompracontroller.findByProveedorIdDetalleCompra);

application.get('/detalleCompraProveedorIdTrue/:proveedorId', detalleCompracontroller.findByProveedorIdDetalleCompraTrue);


module.exports = application;
