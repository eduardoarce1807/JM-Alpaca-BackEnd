'use strict'

var Persona = require('../models/persona');

function createPersona(req, resp){

    var newPersona = new Persona();

    var parametros = req.body;

    newPersona.nombres = parametros.nombres;
    newPersona.apellidos = parametros.apellidos;
    newPersona.email = parametros.email;
    newPersona.dni = parametros.dni;

    newPersona.save(
        (err, personaCreada) => {
            if(err){
                resp.status(500).send({message: "No se pudo crear la persona."});
            }
            else{
                resp.status(200).send({savedPersona: personaCreada});
            }
    });
}

function updatePersona(req, resp){

    var parametros = req.body;

    Persona.findByIdAndUpdate(parametros._id, {
        nombres: parametros.nombres,
        apellidos: parametros.apellidos,
        email: parametros.email,
        dni: parametros.dni
    }, function(err, personaActualizada){
        if(err){
            resp.status(500).send({message: "No se pudo modificar la persona."});
        }
        else{
            resp.status(200).send({updatedPersona: personaActualizada});
        }

    }) ;


}

function deletePersona(req, resp){

    var parametros = req.body;

    Persona.findByIdAndDelete(parametros._id, function(err, personaEliminada){
        if(err){
            resp.status(500).send({message: "No se pudo eliminar la persona."});
        }
        else{
            resp.status(200).send({personaDeleted: personaEliminada});
        }
    }) ;

}

function findByIdPersona(req, resp){

    Persona.findById(req.params.id, (err, personaEncontrada) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar a la persona."});
        }
        else{
            resp.status(200).send({persona: personaEncontrada});
        }
    });

}

function findAllPersona(req, resp){

    Persona.find({}, (err, personasEcontradas) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar los contactos"});
        }
        else{
            resp.status(200).send({personaList: personasEcontradas});
        }
    });

}

module.exports = {
    createPersona,
    updatePersona,
    deletePersona,
    findByIdPersona,
    findAllPersona
};