//Conexión con base de datos

/*const conexionBDD = (datosConexion) => {
    return new Promise((resolve, reject)=>{

        setTimeout(() => {
            datosConexion ? resolve("Conexion Ok") : reject("Error de conexión")
        })
    })
}



conexionBDD(true)
    .then((respuesta)=>{console.log(respuesta);})
    .catch(error => console.log(error))
*/

//Promesas en JS

const obtenerDatos = fetch("https://jsonplaceholder.typicode.com/albums")

obtenerDatos
    .then(peticion => peticion.json())
    .then(respuesta => console.log(respuesta))

    .catch(error => console.log(error))