/*Creación de Web Server en Express y Handlebars
const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');


//Creamos la instancia del método express
const app = express()
app.listen(3000) //Puerto de ejecución

/************************** Llamamos a handlebars *****************************/
/*app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
//Llamamos la ruta de cambio para estos elementos
const ruta = path.join(__dirname, "views")
app.set('views', ruta)

//Render de plantillas
app.get('/hamburguesa/triple_western', (req, res) =>{
    res.render('home', {layout: false})
})

app.get('/hamburguesa/menu', (req, res) =>{
    res.render('menu', {layout: false})
})*/

/********************************* Rutas Públicas y Privadas ********************************/
//Ruta privad


/********************************* Route ********************************/
/* Rutas de llamado al server 
app.get('/', (req, res) => {
    res.send("Bienvenidos a mi aplicativo")
})

app.get('/dashboard', (req, res) =>{
    res.send("Esto es el dashboard")
})

//Mandar información en formato JSON
app.use(express.json())

//Params
app.get('/pedido/:tipo', (req, res) =>{
    //console.log(req.params)
    res.send(`Robalo bubuja dijo: ${req.params.tipo}`)
})

//Query params
app.get('/search', (req, res) =>{
    if (req.query.tipo == "sencilla"){
        res.send("Olvidaste los pepinillos")
    }else{
        res.send("Estan bajo tu lengua")
    }
})

//Registrar información
app.post('/register', (req, res) =>{
    const {body, password} =  req.body
    res.send(`El mail del usuario es ${body} y su clave es ${password}`) //Desestructuración
})
*/

/*----------------------------------- Response --------------------------------------------/
//Texto
app.get('/hamburguesa-simple',(req, res) =>{
    res.send("Hamburguesa - Simple")
})

//Multimedia
app.get('/hamburguesa_doble', (req, res) =>{
    res.sendFile('./doble.jpg',{
        root: __dirname
    })
})

//Documentos
app.get('/hamburguesa_triple', (req, res) =>{
    res.sendFile('./triple.docx',{
        root: __dirname
    })
})

//JSON
app.get('/hamburguesa_mixta', (req, res) =>{
    res.status(200).json({
        "Tipo":"Mixta",
        "Complementos":"Papas",
        "Extras":"Doble Queso"
    })
})
/*----------------------------------------------------------------------*/

/*Si no existe ninguna ruta o la ruta es erronea
app.use((req, res) =>{
    res.send("404 - Not Found")
})
*/

/*//Conexión al puerto-----------------------------------------------
try{
    console.log("Servidor ejectutado en Puerto 3000")
}catch(error){
    console.log(error)
}*/
