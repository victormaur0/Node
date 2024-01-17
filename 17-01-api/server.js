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
app.get("/alumnos", (req, res) => {
    const datos = [{
        nombre: "Victor",
        apellidos: "Mauro González",
        edad: 21,
        cp: 28922,
        telefono: 649493164
    },{
        nombre: "Juan",
        apellidos: "Perez García",
        edad: 24,
        cp: 28322,
        telefono: 658845230
    },{
        nombre: "Paula",
        apellidos: "Ramirez Fernandez",
        edad: 30,
        cp: 28921,
        telefono: 641120577
    }]
    res.json(datos);
})

app.listen(3000, () => {
    console.log("Escuchando puerto 3000")
});
