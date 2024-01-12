# Node
 

## 9 de Enero. 
## !!! DESPLIEGUE !!!

> 1º VMWare con Debian.
>> 2 discos duros para hacer RAID1.
> 2º Instalar docker: ``apt-get install docker``
>> https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04

> Crear carpeta proyecto: "Docker"
> Crear archivo "docker-compose.yml" -> nano docker-compose.yml
> Crear directorio especificado en .yml -> "app" -> mkdir app
> Crear archivo dockerfile -> nano dockerfile
> crear carpeta para guardar las dependencias de node y ficheros js.
>> server.js y package.json.


-> Docker []
    -> docker-compose.yml
    -> app []
        -> Dockerfile
        -> server []
            -> server.js
            -> package.json

> ``docker compose up`` -> Lo lanza y muestra log de todo lo que hace.
>> ``docker compose up --build`` -> Borra el anterior build y lo vuelve a lanzar
>> ``docker compose up -d`` -> Lo lanza sin mostrar el log.


## 11 de Enero
## ¡¡ SERVIDOR !!

 1. Módulo http -> Siempre ha estado incluido.
 2. Módulo express
 3. HBS
<br><br>
### http <br>
> http.createServer((req, res) => {}); <br>
> req -> lo que se recibe (parametros url, datos formulario, datos del fetch, ajax) <br>
> res -> lo que devuelves al navegador. <br>
> Seleccionamos el codigo que devuelve. <br>
> ``res.writeHead(200, {"Content-Type": "text/plain"});``: La cabecera indica que devuelve un codigo 200 con texto plano. <br>
> ``res.write("<h1>Hola Mundo!</h1>");`` <br>
> ``res.end();`` <br>
> Obligatorio res.end() para indicar que hemos terminado de mandar el contenido. <br>
> Se pueden sustituir el write y end en solo un paso: <br>
> ``res.end("<h1>Hola Mundo!</h1>");`` <br>
> Para que pinte las etiquetas: <br>
> ``res.writeHead(200, {"Content-Type": "text/html"});`` <br>

### express (server-express.js) <br>
> ``npm install express`` <br>
> No hace falta poner la cabecera porque express entiende que va a ser html. <br>
> ``app.get("/", (req, res) => {`` <br>
> ``    res.send("<h1>Hola Mundo!</h1>");`` <br>
> ``})`` <br>

### Redirecciones de ruta: (server-express2.js) <br>
> ``const path = require("path")`` <br>
> ``res.sendFile(path.join(__dirname, "./vistas/index.html"));`` <br>
> Enviamos el archivo html. __dirname coge la ruta del proyecto, y le concatena el archivo que queremos enviar. <br>
> Ejemplo: <br>
> ``app.get("/", (req, res) => {`` <br>
> ``    res.sendFile(path.join(__dirname, "./vistas/index.html"));`` <br>
> ``})`` <br>
> ``app.get("/producto", (req, res) => {`` <br>
> ``    res.sendFile(path.join(__dirname, "./vistas/producto.html"));`` <br>
> ``})`` <br>
> Pagina 404 -> se pone al final siempre. <br>
> ``app.get("*", (req, res) => {`` <br>
> ``    res.sendFile(path.join(__dirname, "./vistas/error404.html"));`` <br>
> ``})`` <br>

### Unificar el proceso para que cargue la carpeta directamente sin tener que poner una a una. (server-express3.js) <br>
> ``app.use(express.static(path.join(__dirname, "./vistas")))`` -> ruta: localhost/archivo.html <br>
> Ejemplo <br>
> ``app.use(express.static(path.join(__dirname, "./vistas")))`` <br>
> ``app.get("*", (req, res) => {`` <br>
> ``    res.status(404).sendFile(path.join(__dirname, "./404.html"));`` <br>
> ``})`` <br>

### hbs (server-hbs.js) <br>
> Plugin (aasociado a express) para estructurar el proyecto como mvc. <br>
> ``npm install hbs`` <br>
> ``const hbs = require("hbs")`` <br>
> Renombrar los .html a .hbs <br>
> Para reutilizar componentes, como headers y footers. <br>
> ``hbs.registerPartials(path.join(__dirname, "./views/partials"));`` <br>
> ``app.set("view engine", "hbs");`` <br>
> ``app.get("/", (req, res) => {`` <br>
> ``    res.render("index");`` <br>
> ``})`` <br>
> Para enviar variables desde server.js: <br>
> ``app.get("/producto", (req, res) => {`` <br>
> ``    res.render("producto", {producto:"camiseta"});`` <br>
> ``})`` <br>
> En el fichero .hbs que lo pinta usamos asi: <br>
> ``<h1>PRODUCTOS {{producto}}</h1>`` <br>
> Para utilizar los componentes: <br>
> Carpeta partials dentro de view, y los ficheros. Ejemplo: list.hbs <br>
> ``<ul>`` <br>
> ``    <li>1</li>`` <br>
> ``    <li>2</li>`` <br>
> ``    <li>3</li>`` <br>
> ``    <li>4</li>`` <br>
> ``</ul>`` <br>
> En el fichero que se quiere incluir usamos: <br>
> ``{{> navbar}}`` <br>


>> Ejecutar servidor: ``node server.js``
