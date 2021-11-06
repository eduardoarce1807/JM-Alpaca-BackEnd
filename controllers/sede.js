'use strict'

var Sede = require('../models/sede');

function createSede(req, resp){

    var newSede = new Sede();

    var parametros = req.body;

    newSede.nombre = parametros.nombre;

    newSede.save(
        (err, sedeCreada) => {
            if(err){
                resp.status(500).send({message: "No se pudo crear la sede."});
            }
            else{
                resp.status(200).send({savedSede: sedeCreada});
            }
    });
}

function updateSede(req, resp){

    var parametros = req.body;

    Sede.findByIdAndUpdate(parametros._id, {
        nombre: parametros.nombre
    }, function(err, sedeActualizada){
        if(err){
            resp.status(500).send({message: "No se pudo modificar la sede."});
        }
        else{
            resp.status(200).send({updatedSede: sedeActualizada});
        }

    }) ;


}

function deleteSede(req, resp){

    var parametros = req.body;

    Sede.findByIdAndDelete(parametros._id, function(err, sedeEliminada){
        if(err){
            resp.status(500).send({message: "No se pudo eliminar la sede."});
        }
        else{
            resp.status(200).send({sedeDeleted: sedeEliminada});
        }
    }) ;

}

function findByIdSede(req, resp){

    Sede.findById(req.params.id, (err, sedeEncontrada) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar a la sede."});
        }
        else{
            resp.status(200).send({sede: sedeEncontrada});
        }
    });

}

function findAllSede(req, resp){

    Sede.find({}, (err, sedesEcontradas) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar los contactos"});
        }
        else{
            resp.status(200).send({sedeList: sedesEcontradas});
        }
    });

}

module.exports = {
    createSede,
    updateSede,
    deleteSede,
    findByIdSede,
    findAllSede
};
