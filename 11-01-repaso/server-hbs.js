const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");

// Para reutilizar componentes, como headers y footers.
hbs.registerPartials(path.join(__dirname, "./views/partials"));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index");
})
app.get("/producto", (req, res) => {
    res.render("producto", {producto:"camiseta"});
})
app.get("*", (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "./404.html"));
})

app.listen(3000, () => {
    console.log("Escuchando puerto 3000")
});
