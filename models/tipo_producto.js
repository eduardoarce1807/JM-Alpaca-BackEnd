'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TipoProductoSchema = Schema({
    nombre: String
});

module.exports = mongoose.model('TipoProducto', TipoProductoSchema);
