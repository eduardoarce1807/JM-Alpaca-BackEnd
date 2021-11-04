'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PersonaRolSchema = Schema({
    personaId: {type: Schema.Types.ObjectId,
        ref: 'Persona'
    },
    rolId: {
        type: Schema.Types.ObjectId,
        ref: 'Rol'
    }
});

module.exports = mongoose.model('PersonaRol', PersonaRolSchema);
