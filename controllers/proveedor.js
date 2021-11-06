'use strict'

var Proveedor = require('../models/proveedor');

function createProveedor(req, resp){

    var newProveedor = new Proveedor();

    var parametros = req.body;

    newProveedor.personaId = parametros.personaId;
    newProveedor.sedeId = parametros.sedeId;

    newProveedor.save(
        (err, proveedorCreada) => {
            if(err){
                resp.status(500).send({message: "No se pudo crear la proveedor."});
            }
            else{
                resp.status(200).send({savedProveedor: proveedorCreada});
            }
    });
}

function updateProveedor(req, resp){

    var parametros = req.body;

    Proveedor.findByIdAndUpdate(parametros._id, {
        idPersona: parametros.idPersona,
        idSede: parametros.idSede
    }, function(err, proveedorActualizada){
        if(err){
            resp.status(500).send({message: "No se pudo modificar la proveedor."});
        }
        else{
            resp.status(200).send({updatedProveedor: proveedorActualizada});
        }

    }) ;


}

function deleteProveedor(req, resp){

    var parametros = req.body;

    Proveedor.findByIdAndDelete(parametros._id, function(err, proveedorEliminada){
        if(err){
            resp.status(500).send({message: "No se pudo eliminar la proveedor."});
        }
        else{
            resp.status(200).send({proveedorDeleted: proveedorEliminada});
        }
    }) ;

}

function findByIdProveedor(req, resp){

    Proveedor.findById(req.params.id, (err, proveedorEncontrada) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar a la proveedor."});
        }
        else{
            resp.status(200).send({proveedor: proveedorEncontrada});
        }
    });

}

function findAllProveedor(req, resp){

    Proveedor.find({}, function(err,obj) {
        if(err){
            resp.status(500).send({message: "No se pudo consultar los contactos"});
        }
        else{
            resp.status(200).send({proveedorList: obj});
        }
    });


}

module.exports = {
    createProveedor,
    updateProveedor,
    deleteProveedor,
    findByIdProveedor,
    findAllProveedor
};
