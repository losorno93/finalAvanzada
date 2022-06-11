//controlador se encargada: 
//1.Recibir las peticiones 
//2.Ejecutar logica de negocio
//3.Llamar a la capa de servicios
//4.Enviar las respuestas al cliente
//Importo el servicio
import {ServicioHabitacion} from '../services/ServicioHabitacion.js'

export class ControladorHabitacion {

    constructor(){}

    async buscarTodas(request,response){

        let servicioHabitacion= new ServicioHabitacion()
        try {
            response.status(200).json({
                mensaje:"Exito buscando los datos",
                data:await servicioHabitacion.buscarTodas(),
                estado:true
            })

        }catch(error){
            response.status(400).json({
            mensaje:"Error buscando los datos"+error,
            data:[],
            estado:false
        })
        }
    }

    async buscarPorId(request,response){

        let servicioHabitacion= new ServicioHabitacion()
        let id=request.params.id
        console.log(id)
        try {

            response.status(200).json({
                mensaje:"Exito buscando los datos"+id,
                data:await servicioHabitacion.buscarporId(id),
                estado:true
            })

        }catch(error){
            response.status(400).json({
                mensaje:"Error buscando los datos"+error,
                data:[],
                estado:false
            })
        }
            
        
    }

    async registrar(request,response){
        let servicioHabitacion= new ServicioHabitacion()
        let datosPeticion=request.body
        try{
            await servicioHabitacion.registrar(datosPeticion)
            response.status(200).json({
                mensaje:"Exito agregando la habitacion",
                data:null,
                estado:true
            })

        }catch(error){

            response.status(400).json({
                mensaje:"Fallamos agregando la habitacion"+error,
                data:[],
                estado:false 
            })
        }
    }

    async editar(request,response){
        let servicioHabitacion= new ServicioHabitacion()
        let id=request.params.id
        let datosPeticion=request.body  
        
        try{
            await servicioHabitacion.editar(id,datosPeticion)
            response.status(200).json({
            mensaje:"Exito editando la habitacion",
            data:null,
            estado:true
        })

        }catch(error){

            response.status(400).json({
                mensaje:"Fallamos editando la habitacion "+error,
                data:[],
                estado:false 
            })

        }

    }

    async eliminar(request,response){
        let servicioHabitacion= new ServicioHabitacion()
        let id=request.params.id
        let datosPeticion=request.body
        
        
        try{
            await servicioHabitacion.eliminar(id)
            response.status(200).json({
            mensaje:"Exito editando la habitacion",
            data:null,
            estado:true
        })

        }catch(error){

            response.status(400).json({
                mensaje:"Fallamos editando la habitacion "+error,
                data:[],
                estado:false 
            })
        }

    }
}