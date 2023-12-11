const mongoose = require('mongoose')

//Cadena de conexión a DB
const MONGODB_URI = 'mongodb://localhost:27017/portfolio'

//Crear método de conexión
connection = async()=>{
    try {
        await mongoose.connect(MONGODB_URI)
        console.log("Database is connected")
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection