export const patch = async () => {
  let respuesta = "";
  await fetch("http://localhost:3000/", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      idActualizar: 3,
      datos: { apellidos: "J J" },
    })
  })
    .then(datos => datos.text())
    .then(res => respuesta = res)
    .catch(error => respuesta = error);

  return respuesta;
}

export const deleteFunction = async () => {
  let respuesta = "";
  await fetch("http://localhost:3000/", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      idBorrar: 2
    })
  })
    .then(datos => datos.text())
    .then(res => respuesta = res)
    .catch(error => respuesta = error);

  return respuesta;
}

export const put = async () => {
  let respuesta = "";
  await fetch("http://localhost:3000/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: 3,
      nombre: "Juanito",
      apellidos: "Gonzalez Martin",
      clase: "Jonia",
      curso: 1,
      grado: "ASIR"
    })
  })
    .then(datos => datos.text())
    .then(res => respuesta = res)
    .catch(error => respuesta = error);

  return respuesta;
}
