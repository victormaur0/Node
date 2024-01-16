const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/bicis";
const Patinetes = require("./Models/Patinetes");
const Bicicletas = require("./Models/Bicicletas");

app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index");
})
app.get("/bicis", (req, res) => {
    mongoose.connect(url);
    mongoose.connection.on("connected", async () => {
        await Bicicletas.find({})
        .then(docs => {
            res.render("bicicletas", {lista: docs});
            mongoose.connection.close();
        });
    });
})
app.get("/patinetes", (req, res) => {
    mongoose.connect(url);
    mongoose.connection.on("connected", async () => {
        await Patinetes.find({})
        .then(docs => {
            res.render("patinetes", {lista: docs});
            mongoose.connection.close();
        });
    });
})
app.get("*", (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "./views/404.html"));
})

app.listen(3000, () => {
    console.log("Escuchando puerto 3000");
});

mongoose.connection.on("error", () => {
    console.log("Error al conectar a la base de datos.");
})