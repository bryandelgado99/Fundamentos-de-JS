//Importamos variable app
const app = require('./server.js')
const connection = require('./database.js')

//Conexión al puerto
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
});