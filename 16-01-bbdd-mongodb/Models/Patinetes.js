const mongoose = require("mongoose");
module.exports = mongoose.model("Patinetes", new mongoose.Schema({
    potencia: Number,
    color: String,
    ruedas: Number,
    marca: String,
    extras: {
        amortiguacion: Boolean,
        luz: Boolean
    }
}));