'use strict'

var Compra = require('../models/compra');

function createCompra(req, resp){

    var newCompra = new Compra();

    var parametros = req.body;

    newCompra.proveedorId = parametros.proveedorId;
    newCompra.fecha = parametros.fecha;
    newCompra.unidadDeMasa = parametros.unidadDeMasa;
    newCompra.productoId = parametros.productoId;
    newCompra.tipoDescuentoId = parametros.tipoDescuentoId;
    newCompra.cantidad = parametros.cantidad;
    newCompra.pesoKilos = parametros.pesoKilos;
    newCompra.pesoLibras = parametros.pesoLibras;
    newCompra.descuento = parametros.descuento;

    newCompra.save(
        (err, compraCreada) => {
            if(err){
                resp.status(500).send({message: "No se pudo crear la compra."});
            }
            else{
                resp.status(200).send({savedCompra: compraCreada});
            }
    });
}

function updateCompra(req, resp){

    var parametros = req.body;

    Compra.findByIdAndUpdate(parametros._id, {
        proveedorId: parametros.proveedorId,
        fecha: parametros.fecha,
        unidadDeMasa: parametros.unidadDeMasa,
        productoId: parametros.productoId,
        tipoDescuentoId: parametros.tipoDescuentoId,
        cantidad: parametros.cantidad,
        pesoKilos: parametros.pesoKilos,
        pesoLibras: parametros.pesoLibras,
        descuento: parametros.descuento
    }, function(err, compraActualizada){
        if(err){
            resp.status(500).send({message: "No se pudo modificar la compra."});
        }
        else{
            resp.status(200).send({updatedCompra: compraActualizada});
        }

    }) ;


}

function deleteCompra(req, resp){

    var parametros = req.body;

    Compra.findByIdAndDelete(parametros._id, function(err, compraEliminada){
        if(err){
            resp.status(500).send({message: "No se pudo eliminar la compra."});
        }
        else{
            resp.status(200).send({compraDeleted: compraEliminada});
        }
    }) ;

}

function findByIdCompra(req, resp){

    Compra.findById(req.params.id, (err, compraEncontrada) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar a la compra."});
        }
        else{
            resp.status(200).send({compra: compraEncontrada});
        }
    });

}

function findByProveedorIdCompra(req, resp){

    Compra.find({ proveedorId: req.params.proveedorId}, (err, comprasEcontradas) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar a las compras del proveedor con id: "+proveedorId});
        }
        else{
            resp.status(200).send({comprasProveedorId: comprasEcontradas});
        }
    });

}

function findAllCompra(req, resp){

    Compra.find({}, (err, comprasEcontradas) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar los contactos"});
        }
        else{
            resp.status(200).send({compraList: comprasEcontradas});
        }
    });

}

module.exports = {
    createCompra,
    updateCompra,
    deleteCompra,
    findByIdCompra,
    findByProveedorIdCompra,
    findAllCompra
};
