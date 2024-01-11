# Node
 

## 9 de Enero. 
## !!! DESPLIEGUE !!!

> 1º VMWare con Debian.
>> 2 discos duros para hacer RAID1.
> 2º Instalar docker: `apt-get install docker`
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

> `docker compose up` -> Lo lanza y muestra log de todo lo que hace.
>> `docker compose up --build` -> Borra el anterior build y lo vuelve a lanzar
>> `docker compose up -d` -> Lo lanza sin mostrar el log.


## 11 de Enero
## ¡¡ SERVIDOR !!

> Repaso
>> Formas hacer servidor:
>> 1. Módulo http -> Siempre ha estado incluido.
>> 2. Módulo express 

>> http
>> http.createServer((req, res) => {});
>> req -> lo que se recibe (parametros url, datos formulario, datos del fetch, ajax)
>> res -> lo que devuelves al navegador.

>> Devuelve un codigo 200 con texto plano.
>> Seleccionamos el codigo que devuelve.
>> `res.writeHead(200, {"Content-Type": "text/plain"});`
>> `res.write("<h1>Hola Mundo!</h1>");`
>> `res.end();`
>> Obligatorio res.end() para indicar que hemos terminado de mandar el contenido.
>> Se pueden sustituir el write y end en solo un paso:
>> `res.end("<h1>Hola Mundo!</h1>");`
>> Para que pinte las etiquetas:
>> `res.writeHead(200, {"Content-Type": "text/html"});`

>> express (server-express.js)
>> `npm install express`
>> No hace falta poner la cabecera porque express entiende que va a ser html.
>> `app.get("/", (req, res) => {`
>> `    res.send("<h1>Hola Mundo!</h1>");`
>> `})`

>> Redirecciones de ruta: (server-express2.js)
>> `const path = require("path")`
>> `res.sendFile(path.join(__dirname, "./vistas/index.html"));`
>> Enviamos el archivo html. __dirname coge la ruta del proyecto, y le concatena el archivo que queremos enviar.
>> Ejemplo:
>> `app.get("/", (req, res) => {`
>> `    res.sendFile(path.join(__dirname, "./vistas/index.html"));`
>> `})`
>> `app.get("/producto", (req, res) => {`
>> `    res.sendFile(path.join(__dirname, "./vistas/producto.html"));`
>> `})`
>> Pagina 404 -> se pone al final siempre.
>> `app.get("*", (req, res) => {`
>> `    res.sendFile(path.join(__dirname, "./vistas/error404.html"));`
>> `})`

>> Unificar el proceso para que cargue la carpeta directamente sin tener que poner una a una. (server-express3.js)
>> `app.use(express.static(path.join(__dirname, "./vistas")))` -> ruta: localhost/archivo.html
>> Ejemplo
>> `app.use(express.static(path.join(__dirname, "./vistas")))`
>> `app.get("*", (req, res) => {`
>> `    res.status(404).sendFile(path.join(__dirname, "./404.html"));`
>> `})`

>> hbs (server-hbs.js)
>> Plugin (aasociado a express) para estructurar el proyecto como mvc.
>> `npm install hbs`
>> `const hbs = require("hbs")`
>> Renombrar los .html a .hbs
>> Para reutilizar componentes, como headers y footers.
>> `hbs.registerPartials(path.join(__dirname, "./views/partials"));`
>> `app.set("view engine", "hbs");`
>> `app.get("/", (req, res) => {`
>> `    res.render("index");`
>> `})`
>> Para enviar variables desde server.js:
>> `app.get("/producto", (req, res) => {`
>> `    res.render("producto", {producto:"camiseta"});`
>> `})`
>> En el fichero .hbs que lo pinta usamos asi:
>> `<h1>PRODUCTOS {{producto}}</h1>`
>> Para utilizar los componentes:
>> Carpeta partials dentro de view, y los ficheros. Ejemplo: list.hbs
>> `<ul>`
>> `    <li>1</li>`
>> `    <li>2</li>`
>> `    <li>3</li>`
>> `    <li>4</li>`
>> `</ul>`
>> En el fichero que se quiere incluir usamos:
>> `{{> navbar}}`


>> Ejecutar servidor: `node server.js`