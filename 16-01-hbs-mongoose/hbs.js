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
    let t = {};
    mongoose.connect(url);
    mongoose.connection.on("connected", async () => {
        await Bicicletas.find({})
        .then(docs => {t = (docs); console.log(t)});
    });
    console.log(typeof(t) + t);
    res.render("bicicletas", {uno: t[0], dos: t[1]});
})
app.get("/patinetes", (req, res) => {
    res.render("patinetes");
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