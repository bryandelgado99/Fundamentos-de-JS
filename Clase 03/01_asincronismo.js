// -------------------------------------------------------------------------------------------- Conexión con base de datos

const conexionBDD = (datosConexion) => {
    return new Promise((resolve, reject)=>{

        setTimeout(() => {
            datosConexion ? resolve("Conexion Ok") : reject("Error de conexión")
        })
    })
}

// conexionBDD(true)
//     .then((respuesta)=>{console.log(respuesta);})
//     .catch(error => console.log(error))


//Optimización mediantre try - catch - async/await
const conexionDB = async() => {
    try{
        const r = await conexionDB(true)
        console.log(r)

    }catch(e){
        console.log(e)

    }
}

conexionDB()

// -------------------------------------------------------------------------------------------- Promesas en JS

/*const obtenerDatos = fetch("https://jsonplaceholder.typicode.com/albums")

obtenerDatos
    .then(peticion => peticion.json())
    .then(respuesta => console.log(respuesta))

    .catch(error => console.log(error))*/

//Trabajar con Async y await
const conectarAPI = async() => {
    try{
        const obtenerDatos = (await fetch("https://jsonplaceholder.typicode.com/albums"))
        const info = await obtenerDatos.json()
        console.log(info)

    }catch (error){
        console.log(error)
    }
}

conectarAPI()