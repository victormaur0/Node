const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/bicis";
const Patinetes = require("./Models/Patinetes");

mongoose.connect(url);

mongoose.connection.on("connected", async () => {
    console.log("Conectado a la base de datos.");
    /*const ejemploPatinete = new Patinetes({
        potencia: 150,
        color: "azul",
        marca: "Huawei",
        extras: {
            amortiguacion: false,
            luz: false
        }
    });
    const res = await ejemploPatinete.save();

    console.log("Patinete insertado: " + res);*/

    await Patinetes.find({})
    .then(docs => {console.log(docs)});
})
mongoose.connection.on("error", () => {
    console.log("Error al conectar a la base de datos.");
})
