const mongoose = require("mongoose");
module.exports = mongoose.model("Patinetes", new mongoose.Schema({
    potencia: {type: Number, required: true},
    color: {type: String, required: true},
    ruedas: {type: Number, required: true},
    marca: {type: String, required: true},
    extras: {
        amortiguacion: {type: Boolean, required: true, default: false},
        luz: {type: Boolean, required: true,default: false}
    }
}));