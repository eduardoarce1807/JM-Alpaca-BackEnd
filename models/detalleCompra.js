'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DetalleCompraSchema = Schema({
    productoId: {
        type: Schema.Types.ObjectId,
        ref: 'Producto'
    },
    proveedorId: {
        type: Schema.Types.ObjectId,
        ref: 'Proveedor'
    },
    cantidadTotal: Number,
    pesoKilosTotal: Number,
    pesoLibrasTotal: Number,
    pesoNetoTotal: Number,
    descuentoTotal: Number,
    precio: Number,
    total: Number,
    fecha: Date,
    saved: Boolean
});

module.exports = mongoose.model('DetalleCompra', DetalleCompraSchema);
