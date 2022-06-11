import express from 'express'
//importo el controlador de habitaciones
import { ControladorHabitacion} from '../Controllers/ControladorHabitacion.js'
import { ControladorReserva} from '../Controllers/ControladorReserva.js'
//creo un objeto de la clase controladorHabitacion
let contradorHabitacion= new ControladorHabitacion()
let controladorReserva= new ControladorReserva()

//utilizo el metodo router() de express
export let rutas=express.Router()

//esta es la lista de servicios que ofrece el API de habitaciones
rutas.get('/api/v1/habitaciones', contradorHabitacion.buscarTodas)
rutas.get('/api/v1/habitaciones/:id',  contradorHabitacion.buscarPorId)
rutas.post('/api/v1/habitaciones/',contradorHabitacion.registrar)
rutas.put('/api/v1/habitaciones/:id',contradorHabitacion.editar)
rutas.delete('/api/v1/habitaciones/:id',contradorHabitacion.eliminar )

//esta lista me ayuda acceder a reservas
rutas.get('/api/v1/reserva/:id',  controladorReserva.buscarPorId)
rutas.post('/api/v1/reserva/',controladorReserva.registrar)
rutas.put('/api/v1/reserva/:id',controladorReserva.editar)
rutas.delete('/api/v1/reserva/:id',controladorReserva.eliminar )

