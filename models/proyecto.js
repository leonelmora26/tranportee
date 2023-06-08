import moongose from 'moongose'

const usuario = new moongose.schema({
    nombreUser: {type: String, unique: true, required: true, minlength: 8},
    contraseña: {type: String, minlength: 8}
})

const lugar = new moongose.schema({
    origen: {type: String},
    destino: {type: String},
    horaSalida: {type: Date},
    tarifa: {type: Number, required: true},
    createdAt: {type: Date, required: true},
    estado: {type: Boolean, required: true}
})

const pasajero = new moongose.schema({
    cedula: {type: String, unique: true, required: true},
    nombre: {type: String, minlength: 8, unique: true, required: true},
    celular: {type: String},
    createdAt: {type: Date, required: true},
    estado: {type: Boolean, required: true}
})

const bus = new moongose.schema({
    puesto: {type: Number, required: true},
    placa: {type: String, required: true, unique: true},
    codigo: {type: String, required: true, unique: true},
    createdAt: {type: Date, required: true},
    estado: {type: Boolean, required: true}
})

const ticket = new moongose.schema({
    cedula: pasajero['cedula'],
    bus: bus['placa'],
    formaPago: {type: String, required: true},
    numPuesto: bus['puesto'],
    origen: lugar['origen'],
    destino: lugar['destino'],
    tarifa: lugar['tarifa'],
    usuario: usuario['nombreUser'],
    createdAt: {type: Date, required: true}
})