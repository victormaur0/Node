const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "./vistas")))
app.get("*", (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "./404.html"));
})

app.listen(3000, () => {
    console.log("Escuchando puerto 3000")
});
