'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CompraSchema = Schema({
    proveedorId: {
        type: Schema.Types.ObjectId,
        ref: 'Proveedor'
    },
    fecha: Date,
    unidadDeMasa: String,
    productoId: {
        type: Schema.Types.ObjectId,
        ref: 'Producto'
    },
    tipoDescuentoId: {
        type: Schema.Types.ObjectId,
        ref: 'TipoDescuento'
    },
    cantidad: Number,
    pesoKilos: Number,
    pesoLibras: Number,
    descuento: Number
});

module.exports = mongoose.model('Compra', CompraSchema);
