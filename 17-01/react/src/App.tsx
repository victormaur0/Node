import './App.css'
import { useState } from 'react'


function App() {

  const [content1, cambioContent1] = useState("");

  function mostrar1() {
    fetch("http://localhost:3000/producto")
      .then(datos => datos.json())
      .then(res => {
        cambioContent1(res.map((clase:any) => (
          <div>
            La clase de {clase.curso}º de {clase.ciclo} es {clase.clase}, situada en la {clase.planta}ª planta y hay {clase.alumnos} alumnos
          </div>
        )));
      });



  }

  function mostrar2() {
    fetch("http://localhost:3000/alumnos")
      .then(datos => datos.json())
      .then(res => {
        cambioContent1(res.map((persona: any) => (
          <div>
            Nombre: {persona.nombre}, apellidos: {persona.apellidos}, edad: {persona.edad}, codigo postal: {persona.cp}, telefono: {persona.telefono}
          </div>
        )));
      });
  }

  return (
    <>
      <button onClick={() => {
        mostrar1();
      }}>Boton 1</button>
      <button onClick={() => {
        mostrar2();
      }}>Boton 2</button>
      
      {content1}
    </>
  )

}


export default App

