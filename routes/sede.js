'use strict'

var express = require('express');
var sedecontroller = require('../controllers/sede');
var token = require('../helpers/token');

var application = express.Router();

application.post('/sede/create', sedecontroller.createSede);

application.put('/sede/edit', sedecontroller.updateSede);

application.delete('/sede/delete', sedecontroller.deleteSede);

application.get('/sede/all', sedecontroller.findAllSede);

application.get('/sede/:id', sedecontroller.findByIdSede);

module.exports = application;
