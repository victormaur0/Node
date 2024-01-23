const express = require("express");
const port = 3000;
const app = express();

app.get("/", (req, res) => {
    res.end("<h1>Hola Mundo</h1>");
});

app.get("", (req, res) => {

});

app.use((req, res) => {
    res.status(404);
    res.end("<h1><u>P&aacute;gina no encontrada</u></h1>");
})

app.listen(port, () => {
    console.log("Arrancado servidor puerto 3000");
})