const express = require("express");
const puerto = 3000;
const app = express();


app.get("/", (req, res)=>{
    res.end("<h1>Hola Mundo!</h1>");
})

app.listen(puerto, () => {
    console.log("Hemos arrancado el servidor en el puerto 3000");
})