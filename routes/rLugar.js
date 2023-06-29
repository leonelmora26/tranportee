import { Router, Router } from "express"
import { check } from "express-validator"
import bus from bus.js

const router = new Router

router.get("/lugar", [
    check("origen", "El lugar de salida es obligatorio").not().isEmpty(),
    check("destino", "El lugar de destino es obligatorio").not().isEmpty(),
    check("horaSalida", "La hora de salida es obligatoria").not().isEmpty(),
    check("tarifa", "La tarifa es obligatoria").not().isEmpty(),
    check("createdAt", "La fecha de creación es obligatoria").not().isEmpty(),
    check("estado", "El estado es obligatorio").not().isEmpty()
], httpRuta.getRuta)

export default router