const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./vistas/index.html"));
})

app.get("/producto", (req, res) => {
    res.sendFile(path.join(__dirname, "./vistas/producto.html"));
})

app.listen(3000, () => {
    console.log("Escuchando puerto 3000")
});
