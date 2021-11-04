'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PersonaSchema = Schema({
    nombres: String,
    apellidos: String,
    email: String,
    dni: String
});

module.exports = mongoose.model('Persona', PersonaSchema);