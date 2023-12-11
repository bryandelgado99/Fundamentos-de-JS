//Importamos el esquema y el modelo
const {Schema, model} = require('mongoose')

//Creamos nuevo esquema
const portfolio_schema = new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category :{
        type:String,
        require:true
    }
},{
    timestamps:true
})

//Exportamos el modelo
module.exports = model('portfolio', portfolio_schema)