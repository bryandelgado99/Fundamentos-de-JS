/*Creación de Web Server en Express y Handlebars*/
const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');


//Creamos la instancia del método express
const app = express()
app.listen(3000) //Puerto de ejecución
app.use(express.json())

/********************************* Rutas Públicas y Privadas ********************************/
//Ruta pública
app.get('/', (req, res) => {
    res.send("Bienvenidos a mi aplicativo")
})

//Ruta privada
//Creamos middleware
app.use((req, res, next)=>{
    const{email, password} = req.body

    if(email == "bryand9970@gmail.com" && password == "12345"){
        next()
    }else{
        res.send("Usuario no registrado")
    }
})

app.get('/pedido', (req, res) =>{
    res.send("Esto es el dashboard")
})

/*Si no existe ninguna ruta o la ruta es erronea*/
app.use((req, res) =>{
    res.send("404 - Not Found")
})

/******************************************************/
//Conexión al puerto-----------------------------------------------
try{
    console.log("Servidor ejectutado en Puerto 3000")
}catch(error){
    console.log(error)
}
