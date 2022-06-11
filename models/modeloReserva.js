//Importar mongoose
import mongoose from 'mongoose';
//ESQUEMA 
const Schema = mongoose.Schema;//ESQUEMA DE DATOS (QUE DATOS TIENE MI MODELO)

//CREO MI PROPIO ESQUEMA DE DATOS
const Reserva=new Schema({

    idHabitacion:{
        type:String,
        required:true
    },
    nombre :{
        type:String,
        required:true
    },
    apellido :{
        type:String,
        required:true
    },
    telefono :{
        type:String,
        required:true
    },
    fecha_in:{
        type:Date,
        required:true
    },
    fecha_out:{
        type:Date,
        required:true
    },
    numeroPersonas:{
        type:Number,
        required:true
    },
    costo:{
        type:Number,
        required:false
    }

})

//se envia el modelo de datos
export const modeloReserva=mongoose.model('reservas', Reserva);