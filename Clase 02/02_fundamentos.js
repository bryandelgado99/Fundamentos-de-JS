//Fundamentos de JS
//Clase 02 - 14/11/2023

/*Tipos de Variables*/
/*Las variables pueden tener 3 tipos de scope (dependiendo de dónde se declaren).

1. **Global**: accesible desde cualquier parte del código
2. **Función**: accesible dentro del cuerpo de una función
3. **Bloque**: accesible dentro de un bloque delimitado por { }
*/

//A. VAR (Variable)
/*La razón por la que se recomienda no utilizar la palabra clave var en JavaScript es porque tiene un alcance de función o global, 
lo que significa que las variables definidas con var pueden ser accesibles fuera del bloque donde se declaran.*/


var nicknameUsuario = "Stricker"
var puntosDeVida

// Reasignación de valores a una variables
nicknameUsuario = "Yoshi"
puntosDeVida = 500

console.log(nicknameUsuario+" "+puntosDeVida);

/*Dentro de una condicional*/
console.log(likesPost);
var likesPost;

if (true) {
    var likesPost = 3;
}
console.log(likesPost);

//B. LET
/*Muchos desarrolladores prefieren let para la declaración de variable. No es sorprendente, ya que se trata de una mejora en las declaraciones var.*/

let nicknameUsuario = "Yoshi"
let puntosDeVida

/* No se puede declarar una variable con el mismo nombre */
// let nicknameUsuario = "Toshi"
nicknameUsuario = "Toshi"
puntosDeVida = 900

console.log(nicknameUsuario+" "+puntosDeVida);

//C. CONST (Constante)
/*Las variables declaradas con const mantienen valores constantes. 
Las declaraciones const comparten algunas similitudes con las declaraciones let.*/

const nicknameUsuario = "Kirbysoc"
// Siempre deben inicializar con un valor
let puntosDeVida= 8000

/* No se puede declarar una variable con el mismo nombre: const nicknameUsuario = "Toshi" */
/* No se pueden reasignar valores a este tipo de variables */

console.log(nicknameUsuario+" "+puntosDeVida);

/*--------------------------------------------------------------------------------------------------------*/
/*Cadenas o STRINGS*/
/* Trabajar con cadenas de texto es fundamental ya que toda la información es manejada en forma de texto.

**Tips importantes:**

- [`Documentación oficial.`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)
- Existen varios `[métodos](https://media.licdn.com/dms/image/C4D22AQEkV7Co5-YBvA/feedshare-shrink_2048_1536/0/1678387417354?e=1695859200&v=beta&t=EVYuxFSozVPq4RYMOFfCvcjT1737WQF0PMUKxPCkJSM)` [](https://media.licdn.com/dms/image/C4D22AQHhWwEq5BFH_g/feedshare-shrink_800/0/1646665274523?e=1674691200&v=beta&t=80G_dtFNinycYaq_lwP3W0B81AxbL56vrnEKvwBAVqM)para trabajar con strings.
- Existe varias formas de concatenar un string, pero se recomienda usar **template strings**. */

//MÉTODOS
//Existen algunos métodos para trabajas con cadenas de caractéres:
let nombreJuego = " Mario Kart "

console.log("Número de letras:",nombreJuego.length); //Número de caracteres
console.log("Encotrar alguna palabra:",nombreJuego.includes("Kart")); //Encuentra una cadena de letras en la cadena principal
console.log("Convertir a mayúsculas:",nombreJuego.toUpperCase()); //Cambia todas las letras a Mayúsculas
console.log("Convertir a minusculas:",nombreJuego.toLowerCase()); //Cambia todas las letras a Minúsuclas
console.log("Quitar espacios adelante y atrás:",nombreJuego.trim()); //Quita espacios entre caracteres
console.log("Reemplazar una palabra:",nombreJuego.replace('Kart','Kart-Rider')); //Reemplaza una palabra en al cadena
console.log("Cortar un texto:",nombreJuego.slice(1,6)); //Corta un texto plano
console.log("Cortar un texto:",nombreJuego.substring(1,6)); //Corta un texto en subcadenas
console.log("Cortar un texto:",nombreJuego.charAt(1)); 
console.log("Repetir un texto:",nombreJuego.repeat(2)); //Repite una cadena
console.log("Dividir un texto:",nombreJuego.split(" ")); //Divide un texto

let formUsername = 'Tosh'
console.log("Útil para validar el campo nombre del formulario:",formUsername.length);
let emailUser = 'byron@epn.edu.ec'
console.log("Útil para encotrar algún patrón:",emailUser.includes("@epn.edu.ec"));
let rolUser = 'Administrador'
console.log("Útil para convertir a mayúsculas y presentar en la UI:",rolUser.toUpperCase());
let addressUser = 'QUITUMBE ÑAN 456'
console.log("Útil para convertir a minusculas y guardar en BDD:",addressUser.toLowerCase());
let formLastName = '    Loarte  '
console.log("Útil para quitar espacios adelante y atrás en el campo del formulario:",formLastName.trim());
let discountProduct = "El precio de descuento es del 20%"
console.log("Útil para reemplazar el precio de un descuento:",discountProduct.replace('20%','50%'));
let detailProduct = "Mouse gamer de juego inalámbrico Logitech Serie G Lightspeed G305 blue - Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. "
console.log("Útil para hacer el efecto leer más o expander de un texto largo:",detailProduct.slice(0,50)+'....');
let creditCardUser = "1234 5678 9851 9937"
console.log("Útil para cortar número de tarjeta de crédito en el proceso de facturación:",creditCardUser.substring(15,19));
let numFlight = "AA4569"
console.log("Útil para saber el prefijo del vuelo que indica la aerolínea:",numFlight.charAt(0)+numFlight.charAt(1));
let userAdmin = "Byron Loarte"
let avatarUser = userAdmin.split(" ")
console.log("Útil para cortar un texto y colocar como avatar de perfil:",avatarUser[0].charAt(0),avatarUser[1].charAt(0));

/* Templates Literales */
/* Los template literals son una característica introducida en ES6 (ECMAScript 2015) que permite incluir expresiones 
interpoladas en cadenas de texto. Permiten una sintaxis más sencilla y legible para construir cadenas de texto dinámicas en JavaScript.*/

/*La sintaxis de los template literals se basa en el uso de comillas invertidas (backticks) en lugar de comillas simples
o dobles para definir la cadena de texto.*/
const name = "Byron"
const lastName= "Loarte"
const city ="Quito"
const age = 34
const active = false
console.log(name+"-"+lastName+"-"+city)
console.log(`${name} - ${lastName} - ${city} - ${active ? age : 'No se encuentra activo'}`);

/*--------------------------------------------------------------------------------------------------------------------------------------*/
/* NÚMEROS */
//Trabajar con números es fundamental ya que toda la información es manejada en forma de números para el procesamiento de cálculos 
//y operaciones matemáticas.

// Es importante reconocer el tipo de valor asignado
const numeroVidas = "20" //String
const numeroPuntos = 20 //Number

console.log(numeroPuntos,numeroVidas);
console.log(typeof(numeroPuntos), typeof(numeroVidas));

console.log("suma:",numeroPuntos+20);
console.log("resta:",numeroPuntos-20);
console.log("multiplicación:",numeroPuntos*20);
console.log("división:",numeroPuntos/20);
console.log("módulo:",numeroPuntos%20);


// Importante el manejo de operadores de incremento y decremento
let numeroPuntosActual = 20

console.log(++numeroPuntosActual );
console.log(numeroPuntosActual++);

let numeroVidasActual = 20

console.log(--numeroVidasActual);
console.log(numeroVidasActual--);

//Math
//El método Math es un conjunto de funciones que permiten realizar operaciones matemáticas entre números

console.log("El método Math es un: ", Math); //Método que se comporta como objeto
console.log("Para obtener la constante PI:",Math.PI);
console.log("Para redondear el precio de un producto: ", Math.round(2.43));
console.log("Para sacar la raíz cudrada de un valor:", Math.sqrt(25));
console.log("Para sacar el valor absoluto de un valor:",Math.abs(-450));
console.log("Para sacar el exponente de un valor:", Math.pow(2,5));
console.log("Para obtener el valor mínimo de entre 2 valores:", Math.min(10,4));
console.log("Para obtener el valor máximo de entre 2 valores:", Math.max(58,-4));
console.log("Para obtener el valor random de entre o a 20:", Math.round(Math.random()*20));

//Orden de presencia
//Un tema importante para trabajar con números es el orden de las operaciones.
console.log(3 + 4 * 5)
console.log(4 * 3 ** 2)
console.log(200 * 0.2)
console.log(200 * 1.12)

//Este orden se da por jerarquia operacional


//Conversiones
/* La conversión de números en JS se realiza mediante métodos de tipo parse{Data_Type}, además de verificar si estos cumplen su tipo de dato con métodos de tipo "is{Data_Tipe}*/
let edadJugador = "20"
let precioJuego = "525.63"

console.log(Number.parseInt(edadJugador));
console.log(Number.parseFloat(precioJuego));
console.log(Number.isInteger(edadJugador));

console.log(`${+edadJugador + +precioJuego}`);

/*--------------------------------------------------------------------------------------------------------------------------------------*/

/* BOOLEANOS */
/*Trabajar con booleanos es fundamental ya que toda la información puede ser manejada en forma condicionales para el  procesamiento de información, 
cálculos,operaciones matemáticas, etc.*/

/* Operaciones con Booleanos */
/*Existe un tema importante para trabajar con booleans y es el [`orden de precedencia de los operadores.`](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#precedencia_de_los_operadores)
- Existe un tema importante para trabajar con booleans y es el [`Falsy`](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) y [`Truthy`](https://developer.mozilla.org/en-US/docs/Glossary/Truthy).
- Existe un tema importante para trabajar con booleans y es el de [`Igualdad estricta.`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- Existe un tema importante para trabajar con booleans y son los [`tipos de operadores.`](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#asignacion)
    - **Operadores de asignación**
    - **Operadores de comparación**
    - **Operadores aritméticos**
    - **Operadores bit a bit**
    - **Operadores lógicos**
    - **Operadores de cadena**
    - **Operador condicional (ternario)**
    - **Operador coma**
    - **Operadores unarios**
    - **Operadores relacionales**/

// operadores de asignación 
let saldoTarjetaUsuario = 500
let saldoTarjeta = 1000
let estadoCuenta
let emailConfirmado=null //Valor vacio


// operadores de asignación de adición
saldoTarjetaUsuario += 100
console.log(saldoTarjetaUsuario);

// operadores de comparación
saldoTarjetaUsuario="1000"
console.log(saldoTarjeta == saldoTarjetaUsuario) //Comprobacion literal
// evalua tipo de dato y contenido
console.log(saldoTarjeta === saldoTarjetaUsuario) //Comprobacion exacta
console.log(estadoCuenta === emailConfirmado);


// operadores aritméticos
console.log(saldoTarjeta + parseInt(saldoTarjetaUsuario));

// operadores lógicos 
console.log(saldoTarjeta != saldoTarjetaUsuario);

// evalua tipo de dato y contenido
console.log(saldoTarjeta !== parseInt(saldoTarjetaUsuario));

/* Operador Ternario */
//Existe una forma fácil de trabajar con condicionalesque sea má fácil y sencilla de interpretar.

/* La sintaxis del operador ternario en JS es:

    variable = elemento_1 (comparacion simbolica) elemento_2 ?
      "Respueta o accion en caso de que sea verdadera/se cumpla" : "Respuesta o accion en caso de no cumplir/o ser falso"

*/

const respuesta = saldoTarjeta <= saldoTarjetaUsuario ? "Pagar" : "Seguir consumiendo"
console.log(respuesta);

/*--------------------------------------------------------------------------------------------------------------------------------------*/

/* CONDICIONALES */
/*Trabajar con condiconales es fundamental ya que toda la información puede ser manejada en forma de decisiones (V o F) 
para el  procesamiento de información, cálculos,operaciones matemáticas, etc.*/


/* - Es importante saber el uso del `[operador ternario](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)` para mejorar la legibilidad del código.
- Existen diferentes condiconales
    - *Simple**
    - *Doble**
    - *Anidada**
    - *Múltiple* */

//Condicional Simple
const carritoCompras = ['Tv','Pc','Tablet','Laptop']
  //Utilizando el condicional clásico
  if (carritoCompras.length===0){
      console.log("Agregar productos")
  }

  //Simplificado en operador ternario
  carritoCompras.length===0 ? console.log("Agregar productos") :""

//Condicional Doble
  //Utilizando el condicional clásico
  if (carritoCompras.length!=0)
  {
      console.log("Proceder al pago de los productos")
  }
  else{
      console.log("Agregar productos")
  }

  //Simplificado con Operador Tenario
  console.log(carritoCompras.length!==0 ? "Proceder al pago de los prodcutos": "Agregar productos")

//Condicional Multiple
/*En esta condicional se emplea un tipo de condicional de seleccion llamado "Switch",
el cual permite seleccionar entre varias opciones.*/

const actividadSiri = 2

switch (actividadSiri) {
    case 1:
        console.log("Prender el equipo");
    break;
    case 2:
        console.log("Prender la tv");
    break;
    case 3:
        console.log("Cerrar cortinas");
    break;
    default:
        console.log(`No existe tarea para la actividad ${actividadSiri}`);
    break;
}

/*--------------------------------------------------------------------------------------------------------------------------------------*/

/* BUCLES */
/*Trabajar con bucles es fundamental ya que toda la información puede ser repetida tantas veces se lo desee 
para el  procesamiento de información.*/

/*- Existen diferentes bucles
    - for
    - while
    - do-while
    - forEach - forof - forin - map */

const contador = 10

//FOR
for (let i = contador; i >= 0; i--) {
    
  //Operador Ternario
    i <=0 ? console.log("Comida lista"):console.log(i);
}

//WHILE
while (contador >= 0){

    //Operador Ternario
    contador<=0 ? console.log("Comida lista"):console.log(contador)
    contador--
}

//DO WHILE
do {
    //Operador Ternario
    contador<=0 ? console.log("Comida lista"):console.log(contador)
    contador--
} while (contador >= 0);

//FOR EACH - FOROF - FORIN - MAP
const tareasPendientes = ['Trabajar','Estudiar','Nadar','Viajar','Aprender Js']
const usuario ={
    nombre:"Byron",
    apellido:"Loarte",
}

// Uso del forEach 
tareasPendientes.forEach((t,i)=> console.log(`${i} - ${t}`))

// Uso del for of -> usado para arreglos
for (const t of tareasPendientes) {
    console.log(`${t}`)
}

// Uso del for in -> usado para objetos
for (const clave in usuario) {
    console.log(`${usuario[clave]}`)
}

// Uso del map -> retorna un nuevo arreglo
const nuevasTareas = tareasPendientes.map((t)=> t)
console.log(nuevasTareas);
