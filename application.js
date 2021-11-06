'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var routesAuth = require('./routes/auth');
var routesPersona = require('./routes/persona');
var routesSede = require('./routes/sede');
var routesProveedor = require('./routes/proveedor');
var routesTipoDescuento = require('./routes/tipo_descuento');
var routesProducto = require('./routes/producto');

var application = express();

application.use(bodyParser.urlencoded({extended:false}));
application.use(bodyParser.json());

application.use('/api', routesAuth);
application.use('/api', routesPersona);
application.use('/api', routesSede);
application.use('/api', routesProveedor);
application.use('/api', routesTipoDescuento);
application.use('/api', routesProducto);

application.get('/health-check', function(req, resp){
    resp.status(200).send({mensaje:"OK"});
});

module.exports = application;