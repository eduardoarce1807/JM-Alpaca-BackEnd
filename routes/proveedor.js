'use strict'

var express = require('express');
var proveedorcontroller = require('../controllers/proveedor');
var token = require('../helpers/token');

var application = express.Router();

application.post('/proveedor/create', proveedorcontroller.createProveedor);

application.put('/proveedor/edit', proveedorcontroller.updateProveedor);

application.delete('/proveedor/delete', proveedorcontroller.deleteProveedor);

application.get('/proveedor/all', proveedorcontroller.findAllProveedor);

application.get('/proveedor/:id', proveedorcontroller.findByIdProveedor);

module.exports = application;
