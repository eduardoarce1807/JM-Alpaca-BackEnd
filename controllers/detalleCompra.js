'use strict'

var DetalleCompra = require('../models/detalleCompra');

function createDetalleCompra(req, resp){

    var newDetalleCompra = new DetalleCompra();

    var parametros = req.body;

    newDetalleCompra.productoId = parametros.productoId;
    newDetalleCompra.proveedorId = parametros.proveedorId;
    newDetalleCompra.cantidadTotal = parametros.cantidadTotal;
    newDetalleCompra.pesoKilosTotal = parametros.pesoKilosTotal;
    newDetalleCompra.pesoLibrasTotal = parametros.pesoLibrasTotal;
    newDetalleCompra.pesoNetoTotal = parametros.pesoNetoTotal;
    newDetalleCompra.descuentoTotal = parametros.descuentoTotal;
    newDetalleCompra.precio = parametros.precio;
    newDetalleCompra.total = parametros.total;
    newDetalleCompra.fecha = parametros.fecha;
    newDetalleCompra.saved = parametros.saved;

    newDetalleCompra.save(
        (err, detalleCompraCreada) => {
            if(err){
                resp.status(500).send({message: "No se pudo crear la detalleCompra."});
            }
            else{
                resp.status(200).send({savedDetalleCompra: detalleCompraCreada});
            }
    });
}

function updateDetalleCompra(req, resp){

    var parametros = req.body;

    DetalleCompra.findByIdAndUpdate(parametros._id, {
        productoId: parametros.productoId,
        proveedorId: parametros.proveedorId,
        cantidadTotal: parametros.cantidadTotal,
        pesoKilosTotal: parametros.pesoKilosTotal,
        pesoLibrasTotal: parametros.pesoLibrasTotal,
        pesoNetoTotal: parametros.pesoNetoTotal,
        descuentoTotal: parametros.descuentoTotal,
        precio: parametros.precio,
        total: parametros.total,
        fecha: parametros.fecha,
        saved: parametros.saved
    }, function(err, detalleCompraActualizada){
        if(err){
            resp.status(500).send({message: "No se pudo modificar la detalleCompra."});
        }
        else{
            resp.status(200).send({updatedDetalleCompra: detalleCompraActualizada});
        }

    }) ;


}

function deleteDetalleCompra(req, resp){

    var parametros = req.body;

    DetalleCompra.findByIdAndDelete(parametros._id, function(err, detalleCompraEliminada){
        if(err){
            resp.status(500).send({message: "No se pudo eliminar la detalleCompra."});
        }
        else{
            resp.status(200).send({detalleCompraDeleted: detalleCompraEliminada});
        }
    }) ;

}

function findByIdDetalleCompra(req, resp){

    DetalleCompra.findById(req.params.id, (err, detalleCompraEncontrada) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar a la detalleCompra."});
        }
        else{
            resp.status(200).send({detalleCompra: detalleCompraEncontrada});
        }
    });

}

function findByProveedorIdDetalleCompra(req, resp){

    DetalleCompra.find({ proveedorId: req.params.proveedorId, saved: false }, (err, comprasEcontradas) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar a las compras del proveedor con id: "+proveedorId});
        }
        else{
            resp.status(200).send({comprasProveedorId: comprasEcontradas});
        }
    });

}

function findByProveedorIdDetalleCompraTrue(req, resp){

    DetalleCompra.find({ proveedorId: req.params.proveedorId, saved: true }, (err, comprasEcontradas) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar a las compras del proveedor con id: "+proveedorId});
        }
        else{
            resp.status(200).send({comprasProveedorId: comprasEcontradas});
        }
    });

}

function findAllDetalleCompra(req, resp){

    DetalleCompra.find({}, (err, detalleComprasEcontradas) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar los contactos"});
        }
        else{
            resp.status(200).send({detalleCompraList: detalleComprasEcontradas});
        }
    });

}

module.exports = {
    createDetalleCompra,
    updateDetalleCompra,
    deleteDetalleCompra,
    findByIdDetalleCompra,
    findByProveedorIdDetalleCompra,
    findByProveedorIdDetalleCompraTrue,
    findAllDetalleCompra
};
