'use strict'

var moongose = require('mongoose');
var application = require('./application');

moongose.connect('mongodb+srv://eduardoarce1807:jmalpaca@cluster0.tlnxn.mongodb.net/JMAlpaca?retryWrites=true&w=majority', (err, res) =>{
    if(err){
        console.log('Se ha presentado un error al conectarse a la BBDD');
    }
    else{
        console.log('Se ha conectado con la BBDD correctamente :D');

        application.listen(8292, function(){
            console.log("El servidor web se ha iniciado correctamente");
        });

    }

});