/* Instrucciones del Laboratorio 

1.	De forma grupal, realizar el laboratorio solicitado y por cada tema visto en clase debe ser aplicado a 
un ejemplo de la vida real que sea diferente a los vistos en clase.

2.	Una vez finalizado la tarea solicitada, la misma debe estar alojada en un repositorio de GitHub dentro de una nueva 
rama llamada “api-módulos".

3.	Recuerda agregar al repositorio el respectivo archivo README.md, además, si deseas utilizar una plantilla para tu archivo README 
lo puedes hacer desde esta URL: https://readme.so/

*/

/* ------------------------------------------------- Manipulacion del DOM -------------------------------------------- */
// a. Obtención de datos de una API
// Obtendremos los datos de una API de videojuegos
async function LlamadaApi  () {

  const url = 'https://games-news-api.p.rapidapi.com/news';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b3c06a40damshcec612faa3a8bbdp13ce2bjsn158cd5408af4',
      'X-RapidAPI-Host': 'games-news-api.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
  } catch (error) {
    console.error(error);
  }
}

LlamadaApi()

// b. Local Storge
 // Función para guardar datos en Local Storage
function guardarEnLocalStorage() {
  var clave = document.getElementById("clave").value;
  var valor = document.getElementById("valor").value;

  // Verificamos que la clave y el valor no estén vacíos
  if (clave && valor) {
      // Guardamos en Local Storage
      localStorage.setItem(clave, valor);

      // Limpiamos los campos
      document.getElementById("clave").value = "";
      document.getElementById("valor").value = "";

      alert("Datos guardados en Local Storage");
  } else {
      alert("Por favor, ingrese una clave y un valor");
  }
}

// Función para recuperar datos de Local Storage
function recuperarDeLocalStorage() {
  var clave = document.getElementById("claveRecuperar").value;

  // Verificamos que la clave no esté vacía
  if (clave) {
      // Recuperamos el valor de Local Storage
      var valor = localStorage.getItem(clave);

      // Mostramos el valor recuperado
      if (valor) {
          alert("Valor recuperado de Local Storage: " + valor);
      } else {
          alert("No hay ningún valor almacenado con esa clave");
      }
  } else {
      alert("Por favor, ingrese una clave");
  }
}

/* ------------------------------------------------- Manipulacion del DOM -------------------------------------------- */
// c. Common JS
//file_a.js
const palabra = "Hola";
const Valores = [23, 45, 99];
const division = (x, y) => x/2*y;

//Exportamos 
exports.palabra = palabra;
exports.Valores = Valores;
exports.division = division;

exports.data = {
  palabra, Valores
}

//file_b.js
//Importamos
const {division, data} = require('./Laboratorio-5_Api y Modulos')
console.log(palabra + 'es igual a' + division(55, 99))

// d. ES Modules
//file_A.js
export const palabras = "Hola";
export const Valores_n = [23, 45, 99];
export const divisiones = (x, y) => 9*x/2*y;

//file_B.js
//Importamos
import {palabras, Valores_n, divisiones} from './Laboratorio-5_Api y Modulos'
console.log(palabras + 'es igual a' + divisiones(55, 99))
