const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
    res.send("<h1>Hola Mundo</h1>");
})

app.get("/producto", (req, res) => {
    const datos = [{
        clase: "Seoul",
        curso: 2,
        ciclo: "DAW",
        planta: 3,
        alumnos: 11
    },{
        clase: "Pandora",
        curso: 2,
        ciclo: "DAM",
        planta: 3,
        alumnos: 20
    }]
    res.json(datos);
})

app.listen(3000, () => {
    console.log("Escuchando puerto 3000")
});
