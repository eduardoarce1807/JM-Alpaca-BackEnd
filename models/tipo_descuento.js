'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TipoDescuentoSchema = Schema({
    nombre: String
});

module.exports = mongoose.model('TipoDescuento', TipoDescuentoSchema);