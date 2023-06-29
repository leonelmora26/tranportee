import mongoose from 'mongoose'

const ticket = new moongose.Schema({
    pasajero:{type: mongoose.Schema.Types.ObjectId, ref: "pasajero"},
    bus: bus['placa'],
    formaPago: {type: String, required: true},
    numPuesto: bus['puesto'],
    origen: lugar['origen'],
    destino: lugar['destino'],
    tarifa: lugar['tarifa'],
    usuario: usuario['nombreUser'],
    createdAt: {type: Date, required: true},
    estado: {type: Number, default: 1} //0: inactivo 1: activo
})

export default moongose.model('ticket', ticket)