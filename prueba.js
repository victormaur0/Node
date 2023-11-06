/*console.group();

const mensaje = "Hola Mundo";
console.log(`${mensaje}`);

const numero1 = 1, numero2 = 3;
console.log(`${numero1+numero2}`);

console.log(`${mensaje + (numero1+numero2)}`);

console.groupEnd();*/

const http = require("http");
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200; 
    res.setHeader = ("Content-Type", "text/html");
    const ruta = req.url;
    switch (ruta){
        case "/adios":
            res.end("<h1>Adios mundo</h1>");
            break;
        case "/":
            res.end("<h1>Hola Mundo</h1>");
            break;
        default:
            res.statusCode = 404;
            res.end("<h1>Error, p&aacute;gina no encontrada</h1>");
    }
});

server.listen(port, () => {
    console.log(`Hemos arrancado desde el puerto ${port}`);
});