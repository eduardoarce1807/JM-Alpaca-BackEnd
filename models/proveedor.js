'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProveedorSchema = Schema({
    idPersona: {
        type: Schema.Types.ObjectId,
        ref: 'Persona'
    },
    idSede: {
        type: Schema.Types.ObjectId,
        ref: 'Sede'
    }
});

module.exports = mongoose.model('Proveedor', ProveedorSchema);
