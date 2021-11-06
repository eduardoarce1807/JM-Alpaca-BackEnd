'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProveedorSchema = Schema({
    personaId: {
        type: Schema.Types.ObjectId,
        ref: 'Persona'
    },
    sedeId: {
        type: Schema.Types.ObjectId,
        ref: 'Sede'
    }
});

module.exports = mongoose.model('Proveedor', ProveedorSchema);
