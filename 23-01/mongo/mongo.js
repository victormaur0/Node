const {MongoClient} = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const bbdd = "pruebas"
const clasesC = "clases"

const insertar = async (datos) => {
    console.log(new Date().toString());
    const cliente = new MongoClient(url);        
    let res = [];
    try {
        await cliente.connect();
        console.log("Conectado a la base de datos");
        const id = await cliente.db(bbdd).collection(clasesC).insertOne(datos);
        res.push(`Se han insertado los datos con id: ${id.insertedId}`);
        //console.log(`Se han insertado los datos con id: ${id.insertedId}`)
    } catch (e){
        console.log("Error: " + e);
        res = [];
        res.push(`Error: ${e}`);
    } finally {
        cliente.close();
    }
    return res;
}

module.exports = {
    insertar
}
