import {patch, deleteFunction, put} from './../functions/functions';
import { useState, useEffect } from "react";
import './../App.css'


const botones = () => {

    const [contenido, cambioContenido] = useState("");
    useEffect(() => {
        fetch("http://localhost:3000/")
            .then(datos => datos.text())
            .then(res => cambioContenido(res))
            .catch(error => cambioContenido(error));
    }, [])

    return (
        <>
            <div>
                <button onClick={() => {window.location.reload();}}>
                    Inicio
                </button>
                <button onClick={async() => cambioContenido(await put())}>
                    PUT
                </button>

                <button onClick={async () => cambioContenido(await deleteFunction())}>
                    DELETE
                </button>

                <button onClick={async () => cambioContenido(await patch())}>
                    PATCH
                </button>
            </div>
            <div>
                {(contenido.length != 0) ? contenido : "<p>Cargando...</p>"}
            </div>
        </>
    )
}

export default botones;