'use strict'

var TipoDescuento = require('../models/tipo_descuento');

function createTipoDescuento(req, resp){

    var newTipoDescuento = new TipoDescuento();

    var parametros = req.body;

    newTipoDescuento.nombre = parametros.nombre;

    newTipoDescuento.save(
        (err, tipoDescuentoCreada) => {
            if(err){
                resp.status(500).send({message: "No se pudo crear la tipoDescuento."});
            }
            else{
                resp.status(200).send({savedTipoDescuento: tipoDescuentoCreada});
            }
    });
}

function updateTipoDescuento(req, resp){

    var parametros = req.body;

    TipoDescuento.findByIdAndUpdate(parametros._id, {
        nombre: parametros.nombres
    }, function(err, tipoDescuentoActualizada){
        if(err){
            resp.status(500).send({message: "No se pudo modificar la tipoDescuento."});
        }
        else{
            resp.status(200).send({updatedTipoDescuento: tipoDescuentoActualizada});
        }

    }) ;


}

function deleteTipoDescuento(req, resp){

    var parametros = req.body;

    TipoDescuento.findByIdAndDelete(parametros._id, function(err, tipoDescuentoEliminada){
        if(err){
            resp.status(500).send({message: "No se pudo eliminar la tipoDescuento."});
        }
        else{
            resp.status(200).send({tipoDescuentoDeleted: tipoDescuentoEliminada});
        }
    }) ;

}

function findByIdTipoDescuento(req, resp){

    TipoDescuento.findById(req.params.id, (err, tipoDescuentoEncontrada) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar a la tipoDescuento."});
        }
        else{
            resp.status(200).send({tipoDescuento: tipoDescuentoEncontrada});
        }
    });

}

function findAllTipoDescuento(req, resp){

    TipoDescuento.find({}, (err, tipoDescuentosEcontradas) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar los contactos"});
        }
        else{
            resp.status(200).send({tipoDescuentoList: tipoDescuentosEcontradas});
        }
    });

}

module.exports = {
    createTipoDescuento,
    updateTipoDescuento,
    deleteTipoDescuento,
    findByIdTipoDescuento,
    findAllTipoDescuento
};
