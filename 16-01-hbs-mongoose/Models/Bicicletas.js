const mongoose = require("mongoose");
module.exports = mongoose.model("Bicicletas", new mongoose.Schema({
    marchas: {type: Number, required: true, default: 1},
    color: {type: String, required: true},
    bocina: {type: Number, required: true, default: 0},
    cesta: {type: Boolean, required: true, default: false},
    platos: {type: Number, required: true, default: 0},
}));