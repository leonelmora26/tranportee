import moongose from 'moongose'

const bus = new moongose.schema({
    puesto: {type: Number, required: true},
    placa: {type: String, required: true, unique: true},
    codigo: {type: String, required: true, unique: true},
    createdAt: {type: Date, required: true, default: Date.now()},
    estado: {type: Number, required:true, default: 1} //0: inactivo 1: activo
})

export default moongose.model('bus', bus)
//moongose.schema.types.objectid,ref: ''