const sms = require("../models/sms");

exports.gettAllMessages = async (req, res) => {
  try {
    const mensajes = await sms.find();
    res.status(200).json(mensajes);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener los mensajes" });
  }
};

exports.postMessage = async (req, res) => {
  try {
    const { nombre, mensaje } = req.body;
    if (!nombre || !mensaje) {
      return res.status(400).json({ error: "Faltan campos requeridos" });
    }
    const nuevoMensaje = new sms({ nombre, mensaje });
    await nuevoMensaje.save();
    res.status(201).json(nuevoMensaje);
  } catch (err) {
    res.status(500).json({ error: "Error al guardar el mensaje" });
  }
};

// Permite guardar mensajes desde socket.io y devolver el mensaje guardado
exports.saveMessageFromSocket = async ({ nombre, mensaje }) => {
  if (!nombre || !mensaje) throw new Error("Faltan campos requeridos");
  const nuevoMensaje = new sms({ nombre, mensaje });
  await nuevoMensaje.save();
  return nuevoMensaje;
};