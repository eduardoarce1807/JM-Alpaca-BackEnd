'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SedeSchema = Schema({
    nombre: String
});

module.exports = mongoose.model('Sede', SedeSchema);
