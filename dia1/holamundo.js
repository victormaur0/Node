const hola = (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hola Mundo</title>
    </head>
    <body>
        <p>Hola desde la ruta: ${req.url}</p>
    </body>
    </html>`);
};
const adios = (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hola Mundo</title>
    </head>
    <body>
        <header>
        </header>
        <body>
            <p>Hola desde la ruta: <b>${req.url}<b></p>
        </body>
        <footer>
        </footer>
    </body>
    </html>`);
}

/*module.exports = {
    hola, adios
}
*/

export { hola, adios };
