const express = require("express");
const app = express();
const cors = require("cors");
const {insertar} = require("../mongo/mongo");

app.use(express.json());
app.use(cors({ preflightContinue: false, optionsSuccessStatus: 200 }));

app.get("/", (req, res) => {
    res.send("<h1>Ver productos con GET</h1>");
})
app.post("/", (req, res) => {
    res.send("<h1>Ver productos con POST</h1>");
})
app.patch("/", (req, res) => {
    res.send("<h1>Ver productos con PATCH</h1>");
})
app.put("/", (req, res) => {
    console.log("Entramos en PUT: " + req.originalUrl);
    insertar(req.body)
        .then (e => {
            //console.log("RES: " + e);
            if (e[0].startsWith("Error: ")){
                res.send({
                    ok: false,
                    status: 500,
                    mensaje: e[0]
                })
            } else {
                res.send({
                    ok: true,
                    status: 200,
                    mensaje: e.map(elementos => elementos.toString())
                })
            }
        })
    
})
app.delete("/", (req, res) => {
    res.json({
        ok: true,
        status: 200,
        mensaje: `Se ha borrado el produco con id: ${req.body.id}`
    })
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
