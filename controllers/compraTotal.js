'use strict'

var CompraTotal = require('../models/compraTotal');

function createCompraTotal(req, resp){

    var newCompraTotal = new CompraTotal();

    var parametros = req.body;

    newCompraTotal.proveedorId = parametros.proveedorId;
    newCompraTotal.total = parametros.total;
    newCompraTotal.fecha = parametros.fecha;

    newCompraTotal.save(
        (err, compraTotalCreada) => {
            if(err){
                resp.status(500).send({message: "No se pudo crear la compraTotal."});
            }
            else{
                resp.status(200).send({savedCompraTotal: compraTotalCreada});
            }
    });
}

function updateCompraTotal(req, resp){

    var parametros = req.body;

    CompraTotal.findByIdAndUpdate(parametros._id, {
        proveedorId: parametros.proveedorId,
        total: parametros.total,
        fecha: parametros.fecha
    }, function(err, compraTotalActualizada){
        if(err){
            resp.status(500).send({message: "No se pudo modificar la compraTotal."});
        }
        else{
            resp.status(200).send({updatedCompraTotal: compraTotalActualizada});
        }

    }) ;


}

function deleteCompraTotal(req, resp){

    var parametros = req.body;

    CompraTotal.findByIdAndDelete(parametros._id, function(err, compraTotalEliminada){
        if(err){
            resp.status(500).send({message: "No se pudo eliminar la compraTotal."});
        }
        else{
            resp.status(200).send({compraTotalDeleted: compraTotalEliminada});
        }
    }) ;

}

function findByIdCompraTotal(req, resp){

    CompraTotal.findById(req.params.id, (err, compraTotalEncontrada) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar a la compraTotal."});
        }
        else{
            resp.status(200).send({compraTotal: compraTotalEncontrada});
        }
    });

}

function findByProveedorIdCompraTotal(req, resp){

    CompraTotal.find({ proveedorId: req.params.proveedorId, saved: false }, (err, compraTotalsEcontradas) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar a las compraTotals del proveedor con id: "+proveedorId});
        }
        else{
            resp.status(200).send({compraTotalsProveedorId: compraTotalsEcontradas});
        }
    });

}

function findAllCompraTotal(req, resp){

    CompraTotal.find({}, (err, compraTotalsEcontradas) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar los contactos"});
        }
        else{
            resp.status(200).send({compraTotalList: compraTotalsEcontradas});
        }
    });

}

module.exports = {
    createCompraTotal,
    updateCompraTotal,
    deleteCompraTotal,
    findByIdCompraTotal,
    findByProveedorIdCompraTotal,
    findAllCompraTotal
};
