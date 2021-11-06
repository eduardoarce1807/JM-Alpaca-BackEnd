'use strict'

var express = require('express');
var productocontroller = require('../controllers/producto');
var token = require('../helpers/token');

var application = express.Router();

application.post('/producto/create', productocontroller.createProducto);

application.put('/producto/edit', productocontroller.updateProducto);

application.delete('/producto/delete', productocontroller.deleteProducto);

application.get('/producto/all', productocontroller.findAllProducto);

application.get('/producto/:id', productocontroller.findByIdProducto);

module.exports = application;
