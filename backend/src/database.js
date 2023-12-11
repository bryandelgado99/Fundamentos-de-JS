const mongoose = require('mongoose')

const db_name = "portfolio"

//Cadena de conexión a DB
const MONGODB_URI = `mongodb://localhost:27017/${db_name}`

//Crear método de conexión
connection = async()=>{
    try {
        await mongoose.connect(MONGODB_URI)
        console.log(`Database is connected to ${db_name}`)
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection