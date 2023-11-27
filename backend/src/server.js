//Server con HTTP

/*const http = require("http");

const server = http.createServer((req,res)=>{
    // res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Hello</h1>");
    res.end()
})

server.listen(3000)

console.log("Servidor ejecutandose en el puerto 3000");*/

//Server con Express
const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("<h1>Hello world!</h1>")
})

app.listen(3000)
console.log('Servidor ejecutandose en el puerto 3000');