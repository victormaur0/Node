import './App.css'
import { useEffect, useState } from 'react';

function App() {

  const [contenido, cambioContenido] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/producto")
      .then(datos => datos.json())
      .then(res => cambioContenido(res));
  }, [])


  if (contenido.length != 0) {
    return (
      contenido.map(clase => (
          <>
            La clase de {clase.curso}º de {clase.ciclo} es {clase.clase}, situada en la {clase.planta}ª planta y hay {clase.alumnos} alumnos
          </>
        ))
    )
  }

  return (
    <>
      <p>Cargando ...</p>
    </>
  )
}

export default App

