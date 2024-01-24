import './App.css'
import { useEffect, useState } from 'react';

function App() {

  const [contenido, cambioContenido] = useState("");

  useEffect(() => {
    console.log("useEffect");
    fetch("http://localhost:3000/", {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: 1,
        nombre: "Victor",
        apellidos: "Mauro Gonzalez",
        clase: "Seoul",
        curso: 2,
        grado: "DAW"
      })
    })
      .then(datos => datos.text())
      .then(res => cambioContenido(res));
  }, [])


  if (contenido.length != 0) {
    return (
      contenido
    )
  }

  return (
    <>
      <p>Cargando ...</p>
    </>
  )
}

export default App

