const {MongoClient} = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const bbdd = "pruebas"
const clasesC = "clases"

const dameTodo = async () => {
    console.log(new Date().toString() + " ->> Dame todos los datos");
    const cliente = new MongoClient(url);     
    let res = [];
    try {
        await cliente.connect();
        console.log("Conectado a la base de datos");
        res = await cliente.db(bbdd).collection(clasesC).find({}).toArray();
    } catch (e){
        console.log("Error: " + e);
        res = [];
        res.push(`Error: ${e}`);
    } finally {
        cliente.close();
    }
    return res;
}

const insertar = async (datos) => {
    console.log(new Date().toString() + " ->> Insertar dato");
    const cliente = new MongoClient(url);        
    let res = [];
    try {
        await cliente.connect();
        console.log("Conectado a la base de datos");
        const id = await cliente.db(bbdd).collection(clasesC).insertOne(datos);
        res.push(`Se han insertado los datos con id: ${id.insertedId}`);
    } catch (e){
        console.log("Error: " + e);
        res = [];
        res.push(`Error: ${e}`);
    } finally {
        cliente.close();
    }
    return res;
}

const borrar = async (idF) => {
    console.log(new Date().toString() + " ->> Borrar dato");
    const cliente = new MongoClient(url);        
    let res = [];
    try {
        await cliente.connect();
        const borrado = await cliente.db(bbdd).collection(clasesC).deleteOne({id: idF});
        if (borrado.deletedCount > 0){
            res.push(`Se ha borrado el registro con id: ${idF}`);
        } else {
            res.push(`No se han borrado registros`);
        }
    } catch (e){
        console.log("Error: " + e);
        res = [];
        res.push(`Error: ${e}`);
    } finally {
        cliente.close();
    }
    return res;
}

const actualizar = async (idF, datos) => {
    console.log(new Date().toString() + " ->> Actualizar dato");
    const cliente = new MongoClient(url);        
    let res = [];
    try {
        await cliente.connect();
        console.log(datos);
        console.log(idF);
        const actualizado = await cliente.db(bbdd).collection(clasesC).updateOne({id: idF}, {$set: datos});
        if (actualizado.modifiedCount > 0){
            console.log("Actualizado: "+ actualizado.modifiedCount + " registros");
            res.push(`Se ha actualizado el registro con id: ${idF}`);
        } else {
            console.log("No actualizado");
            res.push(`No se han actualizado registros`);
        }
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
    dameTodo,
    insertar,
    borrar,
    actualizar
}
