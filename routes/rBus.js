import { Router, Router } from "express"
import { check } from "express-validator"
import bus from bus.js

const router = new Router

router.push("/ruta", [
    check("puesto", "El puesto es obligatorio").not().isEmpty(),
    check("placa", "La placa es obligatoria").not().isEmpty(),
    check("codigo", "El codigo es obligatorio").not().isEmpty(),
    check("createdAt", "La fecha de creación es obligatoria").not().isEmpty(),
    check("estado", "El estado es obligatorio").not().isEmpty()
], httpRuta)

export default router