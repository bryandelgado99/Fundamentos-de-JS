/* Instrucciones del Laboratorio 

1.	De forma grupal, realizar el laboratorio solicitado y por cada tema visto en clase debe ser aplicado a 
un ejemplo de la vida real que sea diferente a los vistos en clase.

2.	Una vez finalizado la tarea solicitada, la misma debe estar alojada en un repositorio de GitHub dentro de una nueva 
rama llamada “fundamentos-funciones”.

3.	Recuerda agregar al repositorio el respectivo archivo README.md, además, si deseas utilizar una plantilla para tu archivo README 
lo puedes hacer desde esta URL: https://readme.so/

*/

/* ------------------------------------------------------- Fundamentos de JavaScript ------------------------------------------------- */
//Variables
console.log("--------- VARIABLES ---------")

var nombre_mascota = "Milanessa"
var raza_mascota = "Mestiza"
let edad_mascota = "Un año y un mes"

let vieojuego_favorito = "Call of Duty: Warzone"
const cedula = 1750629980

// -------------------------------------------------------------- Strings
console.log("--------- STRINGS ---------")

let nombre_mascota = "Milanessa Delgado"
let altura_mascota = "50cm de alto y 1m de largo"

console.log(`El nombre de mi mascota es ${nombre_mascota}. Su estatura es de ${altura_mascota}.`)

// -------------------------------------------------------------- Números
console.log("--------- NÚMEROS ---------")

const valor1 = 2099
let valor2 = 2999

console.log("Suma: ", valor1+valor2)
console.log("Resta: ", valor1-valor2)
console.log("Multiplicacion: ", valor1*(valor2-99))
console.log("Division: ", valor2/valor1)
console.log("Raiz cuadrada: ", Math.sqrt(valor1/200))

console.log(99+(5**8)-(6*7-99))

// -------------------------------------------------------------- Booleanos
console.log("--------- NÚMEROS ---------")

let numero_a = 20
let numero_b = 14
let numero_c = 18
let numero_d = 5

const promedio = (numero_a + numero_b + numero_c + numero_d)/4
const estado_promedio = ((numero_a + numero_b + numero_c + numero_d)/4) < 14 ? "Reprobado el año" : "Aprobado el año"

console.log(`El promedio del estudiantes es ${promedio}, por lo cual el mismo ha ${estado_promedio}`)

// -------------------------------------------------------------- Condicionales
console.log("--------- Condicionales ---------")

// a. Condicional Simple
  let numero_primo = 2

  if (numero_primo%2 === 0 && numero_primo/numero_primo === 1){
      console.log(`${numero_primo} es primo`)
  } else {
      console.log(`${numero_primo} no es primo`)
  } 

// b. Condicional Doble
  let clima = "nevando"

  if (eleccion === "soleado") {
    console.log("El día esta agradable y soleado hoy. ¡Use pantalones cortos! Ve a la playa o al parque y come un helado.");
  } else if (eleccion === "lluvioso") {
    console.log("Está lloviendo, tome un abrigo para lluvia y un paraguas, y no se quede por fuera mucho tiempo.");
  } else if (eleccion === "nevando") {
    console.log("Está nevando ─ ¡está congelando! Lo mejor es quedarse en casa con una taza caliente de chocolate, o hacer un muñeco de nieve.");
  } else if (eleccion === "nublado") {
    console.log("No está lloviendo, pero el cielo está gris y nublado; podría llover en cualquier momento, así que lleve un saco solo por si acaso.");
  } else {
    console.log("🦉")
  }

// c. Condicional Compuesta por Switch
  let dado = 6

  switch (dado) {
      case 1: 
          console.log("Avanza un espacio")
      break;
      case 2:
          console.log("Avanza hasta la casilla 2")
      break;
      case 3: 
          console.log("Retrocede 3 espacios")
      break;
      case 4: 
          console.log("Salta 4 casillas")
      break;
      case 5: 
          console.log("Has ganado")
      break;
      case 6: 
          console.log("Has muerto")
      break;
      default:
          console.log("Perdiste tu turno")
      break;
  }

// -------------------------------------------------------------- Bucles
console.log("--------- BUCLES ---------")

let dado_mágico = 3

// a. For
  for (let i=dado_mágico; i>=0; i--){
      i != dado_mágico ? console.log("Has ganado") : console.log(i)
  }

// b. While
  while (dado_mágico >= 1){
      dado_mágico <= 3 ? console.log("Has perdido") : console.log(dado_mágico)
      dado_mágico --
  }

// c. Do While
  do {
      dado_mágico <= 3 ? console.log("Has perdido") : console.log(dado_mágico)
      dado_mágico --
  } while (dado_mágico >= 1)

// d. For Each
  let lista_compras = ["Libras de Arroz","Libras Manteca","Huevos","Libra de pollo","Libras de Cebolla perla"]

  lista_compras.forEach((t,i) => console.log(`${i+1} - ${t}`))

// e. Forof
  for(const lista_compra of lista_compras) {
      console.log(lista_compra)
  }

// f. Forin
  let consola = {
      marca: "Sony",
      modelo: "PlayStation 2",
      anio: 2000,
      unidades_vendidad: "155 000 000"
  }
  for(const dato in consola) {
      console.log(`${dato}: ${consola[dato]}`)
  }

// g. Map
  const nuevoItem = lista_compras.map(t=>t.toUpperCase())
  console.log(nuevoItem)

/* ----------------------------------------------------------------------------------------------------------------------------------------- */

/* ------------------------------------------------------- Funciones en JavaScript --------------------------------------------------------- */

// a. Fundamento de Funciones
  function modelodeEquipo (){
      console.log("Gateway")
      return "Acer Gateway"
  }
  modelodeEquipo()

  const nombre_mascota = function(){
      console.log("Willy Delgado")
      return "Willy"
  }
  nombre_mascota()

// b. Funciones Anónimas y Autoejecutadas
  console.log(
      function() {
          return `Mi mascota se llama: ${nombre_mascota()} y mi modelo de equipo es ${modelodeEquipo()}`
      }
  ())

// c. Argumentos y parámetros
  function dividir (a,b){
      console.log(`La resultante de la division es: ${a/b}`)
  }
  dividir(1957,2023)

  function Promedio(notas) {
      let suma = notas.reduce((total, nota) => total + nota, 0);
      return suma / notas.length;
  }

  let media = Promedio(10, 15, 20, 0, 6, 15, 20, 19);
  console.log(`El promedio obtenido: ${media}`);

// d. Retorno de funciones
  function quieroPan(){
      return "El pan es rico en el desayuno"
  }
  console.log(quieroPan() + " " +"con jamón y queso.")

// e. Funciones Flecha simplificada
  const cuadrado = (x) => { return x * x };
  console.log(cuadrado(9));

// f. Funciones This
  function Juego(nombreJuego) {
      this.nombreJuego = nombreJuego
      this.genero = function() {
          console.log(`El ${this.nombreJuego} es del genero de aventura.`)
      }
      this.precio = function(){
        console.log(`El ${this.nombreJuego} tiene un precio de $75.`)
      }
  }

  let juego = new Juego("Assansin's Creed Valhalla")
  juego.genero()
  juego.precio()

/* ----------------------------------------------------------------------------------------------------------------------------------------- */
