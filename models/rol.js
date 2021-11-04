'use strict'

var moongose = require('mongoose');

var Schema = moongose.Schema;

var RolSchema = Schema({
    nombre: String
});

module.exports = moongose.model('Rol', RolSchema);