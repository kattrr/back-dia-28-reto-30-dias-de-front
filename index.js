const express = require("express");
const mongoose = require("mongoose");
const http = require("http"); // <-- Agregado
const { Server } = require("socket.io"); // <-- Agregado
const cors = require("cors");
require("dotenv").config();

const smsRoutes = require("./routes/smsRoutes");
const smsController = require("./controllers/smsController"); // <-- Agregado

const app = express();
const port = process.env.PORT;

app.use(express.json()); // <-- Agregado para parsear JSON

app.use(cors());

app.use("/mensajes", smsRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(console.log("Se ha conectado a DB"))
  .catch((err) =>
    console.error("No se ha podido conectar a MongoDB", err.message)
  );

app.get("/test", (req, res) => {
  res.send("un mensajito de prueba");
});

// Crear servidor HTTP y Socket.IO
const servidor = http.createServer(app); // <-- Modificado
const io = new Server(servidor, {
  cors: {
    origin: "*", // Ajusta según tus necesidades de seguridad
  },
});

// Ejemplo de conexión de socket
io.on("connection", (socket) => {
  console.log("Nuevo cliente conectado:", socket.id);

  // Escuchar mensajes enviados desde el cliente
  socket.on("chatMessage", async (data) => {
    try {
      // Guardar mensaje en la base de datos usando el controlador
      const nuevoMensaje = await smsController.saveMessageFromSocket(data);

      // Emitir el mensaje guardado a todos los clientes
      io.emit("chatMessage", nuevoMensaje);
    } catch (err) {
      console.error("Error al guardar mensaje desde socket:", err.message);
    }
  });
});

// Cambiar app.listen por servidor.listen
servidor.listen(port, () => {
  console.log(
    "el servidor se está ejecutando en el puerto,",
    servidor.address().port
  );
});

// Exportar io si lo necesitas en otros módulos
module.exports = { io };
