const http = require("http");
const servidor = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>Hola Mundo!</h1>");
    res.end();
});

servidor.listen(3000, () => {
    console.log("Escuchando puerto 3000")
});
