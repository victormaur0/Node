const {MongoClient} = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const bbdd = "bicis"
const bicicletasC = "bicicletas"

async function main(){
    const cliente = new MongoClient(url);
    const datos = {
        "marchas": true,
        "color": "verde",
        "campanilla": 1,
        "cesta": true,
        "platos": 3
    }

    try {
        await cliente.connect();
        console.log("Conectado a la base de datos");
        await insertar(cliente, datos);
    } catch (e){
        console.log("Error: " + e);
    } finally {
        cliente.close();
    }
}

async function insertar(cliente, datos){
    const res = await cliente.db(bbdd).collection(bicicletasC).insertOne(datos);
    console.log(`Se han insertado los datos con id: ${res.insertedId}`);
}

main()
. catch(console.error);