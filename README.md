# 9 de Enero (Despliegue)

VMWare con Debian.   
&emsp;Usar 2 discos duros para hacer RAID1.   
Instalar docker: ``apt-get install docker``      
&emsp;&emsp;[Enlace pasos](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04)   
<br>
> 1. Crear carpeta proyecto: "Docker"   
> 2. Crear archivo "docker-compose.yml" -> nano docker-compose.yml   
> 3. Crear directorio especificado en .yml -> "app" -> mkdir app   
> 4. Crear archivo dockerfile -> nano dockerfile   
> 5. Crear carpeta para guardar las dependencias de node y ficheros js.   

> Estructura de la carpeta del proyecto.
>-> Docker [ ]   
>&emsp;&emsp;-> docker-compose.yml   
>&emsp;&emsp;-> app [ ]   
>&emsp;&emsp;&emsp;&emsp;-> Dockerfile   
>&emsp;&emsp;&emsp;&emsp;-> server [ ]   
>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;-> server.js   
>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;-> package.json   
> [ ] = Carpeta.

> ``docker compose up`` -> Lo lanza y muestra log de todo lo que hace.   
> ``docker compose up --build`` -> Borra el anterior build y lo vuelve a lanzar   
> ``docker compose up -d`` -> Lo lanza sin mostrar el log.   

<br><br><br>
# 11 de Enero (Servidor)

 1. Módulo http -> Siempre ha estado incluido.
 2. Módulo express
 3. HBS
<br><br>
## http
> ``const http = require("http")``<br>
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
> ``res.writeHead(200, {"Content-Type": "text/html"});`` <br><br>

## express (server-express.js)
> ``npm install express`` <br>
> ``const express = require("express")``<br>
> No hace falta poner la cabecera porque express entiende que va a ser html. <br>
> ``app.get("/", (req, res) => {`` <br>
> ``    res.send("<h1>Hola Mundo!</h1>");`` <br>
> ``})`` <br><br>

## Redirecciones de ruta: (server-express2.js)
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
> ``})`` <br><br>

## Unificar el proceso para que cargue la carpeta directamente sin tener que poner una a una. (server-express3.js)
> ``app.use(express.static(path.join(__dirname, "./vistas")))`` -> ruta: localhost/archivo.html <br>
> Ejemplo <br>
> ``app.use(express.static(path.join(__dirname, "./vistas")))`` <br>
> ``app.get("*", (req, res) => {`` <br>
> ``    res.status(404).sendFile(path.join(__dirname, "./404.html"));`` <br>
> ``})`` <br><br>

## hbs (server-hbs.js)
Plugin (aasociado a express) para estructurar el proyecto como mvc. <br>
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
> ``{{> navbar}}`` <br><br>


> Ejecutar servidor: ``node server.js``

# 16 de Enero (Servidor)
Conexion a base de datos de Mongodb

1. Mongodb
2. Mongoose
      
## Módulo mongodb   
> `npm i mongodb`   
> localhost no sirve, usar 127.0.0.1   
> En la url podemos incluir usuario y contraseña -> Ver README.md de repositorio Mongo   
   
La funcion main es la que ejecuta la conexion y todas las funciones que se requieran.   
Hay que controlar los errores con el `.catch(console.error)`   
   
El main siempre tiene un try con catch y finally.   
> 1. Catch: imprime por consola los errores.   
> 2. Finally: siempre cierra la conexión al final de la ejecución haya habido errores o no.   
   
Todas las funciones de insertar, consultas, etc, deben ser asincronas, para que mientras se realiza la operación no se ejecute el cierre de la conexión.   
   
> Cada vez que insertamos, lo almacenamos en una variable para poder imprimir el id del objeto insertado.   
   
   
## Módulo mongoose
Se define una estructura que van a tener los datos, para que al insertarlos/recogerlos/etc, lo cumplan, y si no lo cumplen, no funcione. Se definen cuántos y cuáles.   
> `npm i mongoose`   

Modelos   
`new mongoose.Schema({});` -> Se pasa siempre un json indicando los campos y el tipo.   
 Para que un campo sea obligatorio:      
&nbsp;&nbsp;&nbsp;&nbsp;`color: {type: String, required: true}`   
Para que no se muestre en los select:   
&nbsp;&nbsp;&nbsp;&nbsp;`color: {type: String, select: false}`   
Valor por defecto:   
&nbsp;&nbsp;&nbsp;&nbsp;`color: {type: String, default: "verde"}`   
Primary key:   
&nbsp;&nbsp;&nbsp;&nbsp;`color: {type: String, unique: true}`   
Validacion:   
&nbsp;&nbsp;&nbsp;&nbsp;`color: {type: String, validator: x => {return /REGEX EXP/.text(x)}, message: m => m+" no es un valor correcto."}`   
Tipos permitidos:      
   
> 1. String   
> 2. Number   
> 3. Date   
> 4. Buffer   
> 5. Boolean   
> 6. Mixed   
> 7. ObjectId   
> 8. Array   
> 9. Decimal128   
> 10. Map   
> 11. UUID   
>   
> El String del modelo indica el nombre de la coleccion.   
> En la bbdd de Mongo el nombre de la colecciond debe estar en minusculas.
> En el .js el nombre en el modelo da igual si va en mayusculas o minusculas, internamente hace un `lowercase`.

`mongoose.connection.on`: para cuando se conecta a la base de datos. Primer parámetro:
> &nbsp;&nbsp;- `connected`: cuando se conecta bien.   
> &nbsp;&nbsp;- `error`: cuando falla la conexion.

Find
> Sobre el modelo, hacemos el find, y con el then imprimimos lo que devuelve.
> Parametros:
> 1. {} -> Busca todo
> 2. {} -> Busca lo que tenga luz.

Insertar
> 1. Creamos un objeto de clase del modelo, y como parametros pasamos un json con los valores.
> 2. Almacenamos en una variable el resultado de la funcion asincrona save() sobre el objeto.



# 17 de Enero (Servidor + cliente)
`res.json(datos)` -> muestra en el navegador un fichero de json.   
## Node (express + json) + React
1. En la carpeta api creamos proyecto de react -> `npm create vite`   
2. useEffect -> si tienes que cargar datos de la bbdd de datos se tarda 2seg. Sirve para que pinte la pagina mientras se cargan los datos.   
3. useState -> para que cuando almacenemos los datos que queremos pintar, actualice la vista.   
4. Ruta del fetch: `http://localhost/producto`.   
5. Si error de acceso: en carpeta del servidor de node -> `npm i cors`
6. CORS: Cross-Origin Resource Sharing -> habilitado por defecto para cuando se hace una peticion que está fuera de tu mismo dominio.
7. Añadir al fichero server.js -> `const cors = require("cors")` + `app.use(cors())` 

CORS: te permite hacer peticiones a tu servidor desde otros dominios.

7. Para definir tipo array con useState -> `useState<any[]>([])` -> así no saldrá error al acceder a los parametros del json.
8. Usamos `.map` para recorrer un array y que pinte lo mismo para todos los json.   
   
9. Para lanzarlo:
> `npm run dev` : sobre la carpeta que contiene react
> `node server.js`: sobre la carpeta que contiene el javascript de node.


# 18 de Enero (Servidor)
Metodos de express para rutas.

1. POST: informacion en las cabeceras del mensaje
2. GET: informacion por url.
3. PUT: actualizar completamente
4. DELETE: borrar
5. PATCH: actualizar parcialmente
6. HEAD: recupera encabezados, no datos.
7. OPTIONS: opciones de comunicación (Ej.: comprobar cors)
8. CONNECT: tunel hacia el servidor.
9. TRACE: prueba de retorno con fines diagnósticos.

Ejemplo: `app.delete("/", () => {})`   

# 23 de Enero (Servidor)
Conectar react, con node y con mongo.
1. > `npm i express`   
    > `npm i cors`   
2. Creamos proyecto de react y copiamos el App.tsx del dia 17 de enero.   
3. Al hacer el fetch, le metemos un json como segundo parametro. En el, indicamos que `method` queremos usar.   
4. Para cuando hacemos un delete, put, etc, (ni get ni post), tenemos que pasarle mas cosas en el json.   
> `{method: "DELETE", headers: {"Content-Type": "application/json"}, body: JSON.stringify({id: 1,descripcion: "Camiseta cutre"})}`: Hay que indicar la cabecera, para poder pasarle un json en el body.   
5. En el App.tsx, para recoger ese id o descripcion, se utiliza `req.body.id` o `req.body.descripcion`   
6. Lo ideal en DELETE, PUT o PATCH, es llamar a una funcion que se conecte a la base de datos, y si hace lo que quequeremos, devuelva un `res.json`.   
> `res.json({ok: true, status: 200, mensaje: "Se ha borrado el produco con id: ${req.body.id}"})`.   
7. Para conectar mongo, debemos crear cada funcion que queremos hacer y por parametro le pasamos o lo que se inserta o lo que se busca.   
Dentro de cada funcion se debe hacer la conexion a la base de datos y cerrarla, ademas de devolver los posibles errores que hayan ocurrido.   
Cada función deberá importarse en el server.js para poder llamarla desde cada metodo.
8. Para que useEffect de React no se ejecute 2 veces, en main.tsx, eliminamos `<React.StrictMode>`.   

# 24 de Enero (Servidor + Cliente)
Continuación del dia 23 de enero -> Programar el resto de metodos e implementarlo con botones.
