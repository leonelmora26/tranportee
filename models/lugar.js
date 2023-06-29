import moongose from 'moongose'

const lugar = new moongose.schema({
    origen: {type: String, required: true},
    destino: {type: String, required: true},
    horaSalida: {type: Date, required: true},
    tarifa: {type: Number, required: true},
    createdAt: {type: Date, required: true},
    estado: {type: Number, default: 1} //0: inactivo 1: activo
})

export default moongose.model('lugar', lugar)