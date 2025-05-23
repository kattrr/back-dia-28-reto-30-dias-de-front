const mongoose = require("mongoose")
const Schema = mongoose.Schema

const MensajeSchema = new Schema ({
    nombre:{
        type: String,
        required:true
    },
    mensaje:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model("mensaje",MensajeSchema)