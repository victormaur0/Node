const express = require("express");
const app = express();
const cors = require("cors");
const {dameTodo, insertar, borrar, actualizar} = require("../mongo/mongo");

app.use(express.json());
app.use(cors({ preflightContinue: false, optionsSuccessStatus: 200 }));

app.get("/", (req, res) => {
    dameTodo()
        .then(e => {
            res.send(e);
        })
})
app.post("/", (req, res) => {
    res.send("<h1>Ver productos con POST</h1>");
})
app.patch("/", (req, res) => {
    actualizar(req.body.idActualizar, req.body.datos)
        .then(e => {
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
                    mensaje: e[0]
                })
            }
        })
})
app.put("/", (req, res) => {
    insertar(req.body)
        .then (e => {
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
    borrar(req.body.idBorrar)
        .then (e => {
            if (e[0].startsWith("Error: ")){
                res.send({
                    ok: false,
                    status: 500,
                    mensaje: e[0]
                })
            } else {
                res.json({
                    ok: true,
                    status: 200,
                    mensaje: e[0]
                })
            }
        });
})

app.listen(3000, () => {
    console.log("Escuchando puerto 3000")
});
