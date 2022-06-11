


//IMPORTO LAS VARIABLES DE ENTORNO
import 'dotenv/config' 

//FORMA VIEJA DE IMPORTAR 
//require('dotenv').config()

//IMPORTO LA CLASE SERVIDOR
import {Servidor} from './Server/Servidor.js'


//CREAR UN OBJETO DE LA CLASE SERVIDOR
let servidor=new Servidor()

//DESPERTAR EL SERVIDOR
servidor.despertarServidor()