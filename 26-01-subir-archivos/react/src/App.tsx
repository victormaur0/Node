import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const form = document.getElementById("files_form");
  if (form != null) form.addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(document.querySelector("form")!);
    console.log(formData.keys);
    console.log(formData.values);
    fetch("http://localhost:3000/subir_archivos", {
        method: 'POST',
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data"
        }
    })
        .then((res) => console.log(res))
        .catch((err) => console.log("Error occured", err));
  });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <form id='files_form' method='POST'>
          <input type='file' id='archivo' name='archivo'/>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  )
}

export default App
