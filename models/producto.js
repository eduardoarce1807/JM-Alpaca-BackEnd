'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductoSchema = Schema({
    nombre: String
    // nombreCorto: String,
    // orden: Number,
    // tipoProductoId: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'TipoProducto'
    // }
});

module.exports = mongoose.model('Producto', ProductoSchema);
