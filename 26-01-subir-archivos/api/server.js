const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
const upload = multer({ dest: path.join(__dirname, "/uploads/")})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {})

app.post("/subir_archivos", (req, res) => {
    console.log("SUBIR ARCHIVOS");
    console.log(req.body);
    console.log(req.files);
    res.json({ message: "Successfully uploaded files" });
})

app.listen(3000, () => {
    console.log("Escuchando puerto 3000")
});
