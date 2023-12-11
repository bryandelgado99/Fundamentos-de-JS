const {Router} = require('express')

//Instanciamos la clase
const router = Router() 

//Rutas púbicas
router.get('/', (req, res) =>{
    res.render('index')
})

router.get('/login', (req, res) =>{
    res.render('login')
})

//Rutas Privadas

//Exportamos el módulo
module.exports = router