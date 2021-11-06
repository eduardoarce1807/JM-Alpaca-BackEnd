'use strict'

var Producto = require('../models/producto');

function createProducto(req, resp){

    var newProducto = new Producto();

    var parametros = req.body;

    newProducto.nombre = parametros.nombre;

    newProducto.save(
        (err, productoCreada) => {
            if(err){
                resp.status(500).send({message: "No se pudo crear la producto."});
            }
            else{
                resp.status(200).send({savedProducto: productoCreada});
            }
    });
}

function updateProducto(req, resp){

    var parametros = req.body;

    Producto.findByIdAndUpdate(parametros._id, {
        nombre: parametros.nombre
    }, function(err, productoActualizada){
        if(err){
            resp.status(500).send({message: "No se pudo modificar la producto."});
        }
        else{
            resp.status(200).send({updatedProducto: productoActualizada});
        }

    }) ;


}

function deleteProducto(req, resp){

    var parametros = req.body;

    Producto.findByIdAndDelete(parametros._id, function(err, productoEliminada){
        if(err){
            resp.status(500).send({message: "No se pudo eliminar la producto."});
        }
        else{
            resp.status(200).send({productoDeleted: productoEliminada});
        }
    }) ;

}

function findByIdProducto(req, resp){

    Producto.findById(req.params.id, (err, productoEncontrada) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar a la producto."});
        }
        else{
            resp.status(200).send({producto: productoEncontrada});
        }
    });

}

function findAllProducto(req, resp){

    Producto.find({}, (err, productosEcontradas) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar los contactos"});
        }
        else{
            resp.status(200).send({productoList: productosEcontradas});
        }
    });

}

module.exports = {
    createProducto,
    updateProducto,
    deleteProducto,
    findByIdProducto,
    findAllProducto
};
