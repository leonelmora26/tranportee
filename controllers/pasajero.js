import pasajero from "../models/pasajero.js";

const httpPersona = {
  postpasajero : async (req, res) => {
    
    try {
      const {cedula,nombre,celular} = req.body;
      const dato = new pasajero({cedula,nombre,celular})

      await dato.save()

      res.json({dato})
    } catch (error) {
      res.status(400).json({ error });
    }   
  },

  getPasajero : async (req, res) => {
    try {
      const Pasajero = await pasajero.find()
      res.json({Pasajero})

    } catch (error) {
      res.status(400).json({error})
    }
  },
  putPasajero: async (req, res) => {
    try {
      const {cedula} = req.params
      const {nombre, celular} = req.body
      const Pasajero = await pasajero.find({cedula},{nombre, celular},{new:true})
        res.json({Pasajero})
    } catch (error) {
      res.status(400).json({error})
    }
  }

};

export default httpPersona;