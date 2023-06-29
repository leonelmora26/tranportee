import moongose from 'moongose'

const usuario = new moongose.schema({
    nombreUser: {type: String, unique: true, required: true, minlength: 8},
    password: {type: String, minlength: 8},
    estado: {type: Number, default: 1} //0: inactivo 1: activo
})

export default moongose.model('usuario', usuario)