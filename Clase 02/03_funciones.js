/* Introduccion a Funciones en JS */

/* Conceptos */
/* La funciones en JS son bloques de construcción fundamentales en JavaScript. Estas permiten:

- Reutilizar el código.
- Código mejor ordenado.
- Saber las bases para la programación `[funcional en React](https://react.dev/learn/your-first-component)`. */

/*Ejemplo de funcion y llamado */
function hello(){
  console.log("Bienvenidos a los fundamentos");
  console.log("Trabjando con JS");
}

hello() //Llamado de funcion

/* Reutilizacion de funciones */
function declarada(){
    console.log("Yo soy una función declarada");
}
declarada()

const expresada = function(){
    console.log("Yo soy una función dexpresada");
}
expresada() //Llamada la expresion de la funcion anonima

/*--------------------------------------------------------------------------------------------------------------------------------------*/

//Funciones Anonimas y Autoejecutadas
//En JavaScript, usualmente no necesitas nombrar tus funciones, especialmente cuando se pasa una función como argumento a otra función.

/*Funcion Anonima*/
console.log(function(){
  return "esto es una prueba de para validar una cuenta"
}());

//Funcion Autoejecutada
(function(){
  console.log("función para validar datos del usuario")
})()

const buscador = document.querySelector('#search-178')
const button = document.createElement("button")
button.innerText="Hello React"
buscador.appendChild(button);

button.addEventListener('click',function(){
  alert("Usuario registrado")
})

/*--------------------------------------------------------------------------------------------------------------------------------------*/

/*Argumentos y Parametros*/
//En una función se puede especificar los parámetros necesarios.
//Se puede optar por utilizar [parametros rest].

function hello(nameOne,nameTwo){
  return "welcome "+ nameOne + " and "+nameTwo
}
console.log(hello('Js','React'))

//Parametros por Default
//En una función se puede especificar parámetros opcionales.
function hello(nameOne,nameTwo="Node.Js"){
  return "welcome "+ nameOne + " and "+nameTwo
}
console.log(hello('Js'))

//Parametros Rest
const precioFinalItems = function(a,b,...args){
  let suma = 0;
  var total = suma+a+b

  if(args.length>0) args.forEach(e =>total+=e)
    return total
}

console.log(precioFinalItems(10,20,40,50,10))

/*--------------------------------------------------------------------------------------------------------------------------------------*/

//Retorno de Funciones
function hello(){
    
  return "hola Js"
  // return 123 
  // return true 
  // return ['Peter','Mike','Camila','Joe']
  // return {
  //     name:"Byron",
  //     lastname:"Loarte",
  //     age:34
  // }
  // return function(){
  //     return "Hello Js"
  // }
}
console.log(hello())

/*--------------------------------------------------------------------------------------------------------------------------------------*/

//Funciones Flecha

/*Una expresión de `[función flecha](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions#funciones_flecha)` es una alternativa 
compacta a una expresión de función tradicional.
Las "arrow functions" son una característica introducida en ECMAScript 6 que permiten a los programadores definir funciones de manera 
más concisa y legible utilizando una sintaxis simplificada. */

function login(user,password){
  console.log("Usuario y password válidos");
}


const validarMail = (user,email)=>{
  console.log("El emial ha sido verificado")
}


const registrarAvatar = (photo)=>console.log("El avatar ha sido registrado");

login()
validarMail()
registrarAvatar()

//const buscador = document.querySelector('#search-178')
const button = document.createElement("button")
button.innerText="Hello React"
buscador.appendChild(button);

button.addEventListener('click',()=>{ //Funcion flecha
  alert("Usuario registrado")
})

/*--------------------------------------------------------------------------------------------------------------------------------------*/

//Funcion Arrow
const button = document.createElement("button")
button.innerText="Carrito de compras"
buscador.appendChild(button);

estado= false

button.addEventListener('click',()=>{
    if (estado) return alert("El carrito se encuentra lleno")
    return alert("El carrito se encuentra sin productos")
})

/*--------------------------------------------------------------------------------------------------------------------------------------*/

//THIS
/*En realidad, en las arrow functions sí existe la palabra clave `this`, pero su semántica es ligeramente diferente de la de las funciones regulares.

En las funciones regulares, el valor de `this` depende de cómo se llama la función, lo que puede llevar a errores y confusión en ciertos casos. 
En cambio, en las arrow functions, el valor de `this` está determinado por el contexto léxico en el que se define la función.

En otras palabras, cuando se utiliza `this` dentro de una arrow function, se hace referencia al valor de `this` en el contexto que rodea a la función, 
no al valor de `this` en la función en sí misma. Esto significa que las arrow functions son particularmente útiles en situaciones donde se necesita
conservar el valor de `this` de un **objeto padre**, por ejemplo, en los métodos de los objetos */

const persona = {
  nombre: "Byrontosh",
  saludar: function () {
  setTimeout(() => {
      console.log("Hola, mi nombre es " + this.nombre)
      }, 1000);
  },
}
persona.saludar()

/*En este ejemplo, el método saludar utiliza una arrow function en la función setTimeout para imprimir un saludo con el nombre de la persona.
La arrow function utiliza this.nombre para acceder al nombre de la persona, pero en lugar de referirse a setTimeout como lo haría una función regular, 
hace referencia al valor de this en el contexto léxico del objeto persona.*/
