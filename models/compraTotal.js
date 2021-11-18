'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CompraTotalSchema = Schema({
    proveedorId: {
        type: Schema.Types.ObjectId,
        ref: 'Proveedor'
    },
    total: Number,
    fecha: Date
});

module.exports = mongoose.model('CompraTotal', CompraTotalSchema);
