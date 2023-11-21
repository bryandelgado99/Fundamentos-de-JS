// CommonJS const {login, LIKES} = require('./module')
import convertirFecha from './helpers.js'

//ES MODULES
import {login, LIKES} from './module.js'
login("Mauricio", "12334")

console.log(LIKES)

convertirFecha()