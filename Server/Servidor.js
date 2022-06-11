//importo el framework express
//const express = require('express')
import express from 'express'
import {rutas} from '../routes/rutas.js'

//importo la conexion bd
import{conectarConBD} from '../database/conexion.js'

export class Servidor{
    constructor(){
        this.app = express()//atributo app guarda a express
        this.conectarBD()
        this.llamarAuxiliares()//activo midlewares o ayudas
        this.atenderPeticiones()
    }

    despertarServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log(`Servidor encendendido en ${process.env.PORT}`)
        })
    
    }
    atenderPeticiones(){
        //Llamado al archivo de rutas

        this.app.use('/', rutas)      
    }
    
    llamarAuxiliares(){
        this.app.use(express.json())//es el ayudante para recibir datos por el body
    }

    conectarBD(){
        conectarConBD()
    }
}