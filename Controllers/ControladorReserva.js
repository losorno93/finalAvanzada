//controlador se encargada: 
//1.Recibir las peticiones 
//2.Ejecutar logica de negocio
//3.Llamar a la capa de servicios
//4.Enviar las respuestas al cliente
//Importo el servicio
import {ServicioReserva} from '../services/ServicioReserva.js'
import {ServicioHabitacion, ServicioHabitacion} from '../services/ServicioHabitacion.js'

export class ControladorReserva {

    constructor(){}

    async buscarPorId(request,response){

        let servicioReserva= new ServicioReserva()
        let id=request.params.id
        console.log(id)
        try {

            response.status(200).json({
                mensaje:"Exito buscando la reserva"+id,
                data:await servicioReserva.buscarPorid(id),
                estado:true
            })

        }catch(error){
            response.status(400).json({
                mensaje:"Error buscando la reserva"+error,
                data:[],
                estado:false
            })
        }
            
        
    }

    async registrar(request,response){
        let servicioReserva= new ServicioReserva()
        let servicioHabitacion= new ServicioHabitacion()

        let datosPeticion=request.body
        try{
            //consultar cuanto vale por noche 1 habitacion
            let habitacionConsultada=await servicioHabitacion.buscarPorId(datosPeticion.idHabitacion)
            let precioNoche=habitacionConsultada.precio
            //Fecha salida
            let fechaSalida=datosPeticion.fecha_out

            //fecha entrada
            let fechaEntrada=datosPeticion,fecha_in
            
            //restar las fechas(Entrada-Salida)--organizarlo
            let diastotales=fechaSalida-fechaEntrada

            //costo de la reserva

            let costo=diastotales*precioNoche

            await servicioReserva.registrar(datosPeticion)
            response.status(200).json({
                mensaje:"Exito agregando la reserva",
                data:null,
                estado:true
            })

        }catch(error){

            response.status(400).json({
                mensaje:"Fallamos agregando la reserva"+error,
                data:[],
                estado:false 
            })
        }
    }

    async editar(request,response){
        let servicioReserva= new ServicioReserva()
        let id=request.params.id
        let datosPeticion=request.body  
        
        try{
            await servicioReserva.editar(id,datosPeticion)
            response.status(200).json({
            mensaje:"Exito editando la reserva",
            data:null,
            estado:true
        })

        }catch(error){

            response.status(400).json({
                mensaje:"Fallamos editando la reserva "+error,
                data:[],
                estado:false 
            })

        }

    }

    async eliminar(request,response){
        let servicioReserva= new ServicioReserva()
        let id=request.params.id
        let datosPeticion=request.body
        
        
        try{
            await servicioReserva.eliminar(id)
            response.status(200).json({
            mensaje:"Exito eliminando la reserva",
            data:null,
            estado:true
        })

        }catch(error){

            response.status(400).json({
                mensaje:"Fallamos eliminando la reserva "+error,
                data:[],
                estado:false 
            })
        }

    }
}