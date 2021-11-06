'use strict'

var Usuario = require('../models/usuario');
var token = require('../helpers/token');
var bcrypt = require('bcrypt-nodejs');

function pruebaController(req, resp){
    resp.status(200).send({mensaje:"OK 2"});
}

function registrarUsuario(req, resp){
    var nuevoUsuario = new Usuario();

    var parametros = req.body;

    nuevoUsuario.usuario = parametros.usuario;
    nuevoUsuario.personaId = parametros.personaId;

    bcrypt.hash(parametros.password, null, null, function(err, hash){
        nuevoUsuario.password = hash;
    });

    nuevoUsuario.save(
        (err, usuarioGuardado) => {
            if(err){
                resp.status(500).send({message: "No se pudo crear el usuario"});
            }
            else{
                resp.status(200).send({userCreated: usuarioGuardado});
            }
    });

}

function validarPasswordDeUsuario(req, resp){

    var parametros = req.body;

    var usuarioIngresado = parametros.usuario;
    var passwordIngresado = parametros.password;

    Usuario.findOne({usuario: usuarioIngresado}, (err, usuarioEncontrado) => {
        if(err || usuarioEncontrado == null){
            resp.status(500).send({message: "No se pudo encontrar el usuario"});
        }
        else{
            bcrypt.compare(passwordIngresado, usuarioEncontrado.password, (err, check)=>{
                if(check){
                    resp.status(200).send({message: "Usuario autenticado", token : token.obtenerTokenDeUsuario(usuarioEncontrado)});
                }
                else{
                    resp.status(403).send({message: "No se pudo autenticar el usuario"});
                }
            });
        }
    });

}

function findAllUsuarios(req, resp){

    Usuario.find({}, function(err,obj) {
        if(err){
            resp.status(500).send({message: "No se pudo consultar los usuarios"});
        }
        else{
            resp.status(200).send({usuarios: obj});
        }
    });


}

module.exports = {
    pruebaController,
    registrarUsuario,
    validarPasswordDeUsuario,
    findAllUsuarios
};