'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UsuarioSchema = Schema({
    usuario: String,
    password: String,
    personaId: {
        type: Schema.Types.ObjectId,
        ref: 'Persona'
    }   
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
