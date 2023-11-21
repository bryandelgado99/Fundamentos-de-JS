/* Instrucciones del Laboratorio 

1.	De forma grupal, realizar el laboratorio solicitado y por cada tema visto en clase debe ser aplicado a 
un ejemplo de la vida real que sea diferente a los vistos en clase.

2.	Una vez finalizado la tarea solicitada, la misma debe estar alojada en un repositorio de GitHub dentro de una nueva 
rama llamada “objetos-arreglos".

3.	Recuerda agregar al repositorio el respectivo archivo README.md, además, si deseas utilizar una plantilla para tu archivo README 
lo puedes hacer desde esta URL: https://readme.so/

*/

/* --------------------------------------------------------- Objetos ------------------------------------------------- */
// a. Definición de objetos
    const videojuego = {
        name: "Call of Duty",
        developer: "Activision",
        first_release: 2000,
        firt_game: "Call of Duty 1",
        active: true,
        data: {
            genres: "FPS - First Person Shooter, War, Action",
            base_price: 70,
        },
        more_bounty: 17000000,
        sagas: ["Moden Warfare", "Ghosts", "Black Ops", "World at War"],
        platforms: ["PlayStation", "Xbox", "Nintendo Wii", "Android", "iOS", "Windows"],
        sendMessage() {
            return `Se aproxima un nuevo Call of Duty ${this.sagas[2]} on ${this.platforms[0]}`;
        }
    };

    console.log(JSON.stringify(videojuego));
    console.log(videojuego);
    videojuego.sendMessage()

// b. Desestructuración de Objetos
    const {name, developer, all_data=videojuego.data, sagas} = videojuego;
    console.log(videojuego);

// c. Congelar Objetos
    Object.seal(videojuego)
    console.log(Object.isSealed(videojuego))
    videojuego.first_release= 2009
    console.log(videojuego);

// d. Unir dos objetos
    const battle_royale = {
      br_name: "Warzone 2",
      release: 2019,
      total_players: 160
    }

    const all_Info = {...videojuego,...battle_royale}
    console.log(all_Info)

// e. Unir Objetos
    const message = {
      name: "Agua", 
      send_by: "Gmail",
      title: "Hello World",

      contacts_info:{
        contact_name: "Tiffany",
        mail: "fannymn35@gmail.com"
      },

      sendMessagenew(){
          return `Se ha enviado el mensaje ${this.title} para el contacto ${this.contacts_info.contact_name}, cuyo correo es ${this.contacts_info.mail}`
      }
    }

    console.log(message.sendMessagenew())

// f. Métodos para trabajar con objetos
    console.log("Obtener las claves:",Object.keys(message))
    console.log("Obtener los valores:",Object.values(message))
    console.log("Obtener las claves y valores en un array:",Object.entries(message))

// e. Nombres abreviados de propiedades
    const model ="Gateway"
    const product_name = "GTWN156-5"
    const price = 600

    const newProduct = {
        model,
        product_name,
        price
    }

    console.log(newProduct);
/* ------------------------------------------------------------------------------------------------------------------ */


/* ------------------------------------------------------- Arreglos ------------------------------------------------- */

// a. Fundamentos de un arreglo
const arreglo_a = [100, 150, 250, 365, 14455, 21515];

// b. Métodos de un arreglo
console.log(arreglo_a.length);
console.log(arreglo_a[0]);
console.log(arreglo_a[9]);

// c. Métodos de Mod4ificación de Arreglos
arreglo_a.push(1151);   // Agrega un número u string dado, al final del arreglo.
arreglo_a.unshift(2000);  // Agrega un número o string dado, al inicio del arreglo.
arreglo_a.pop();       // Elimina el último elemento del arreglo.
arreglo_a.shift();     // Elimina el primer elemento del arreglo.

console.log("Nuevo arreglo:", arreglo_a);

// d. Método find y map en Arreglos
const finding = arreglo_a.find(e => e !== 2099);
console.log("Se ha encontrado", finding);

const nuevo_arreglo = arreglo_a.map(e => e * 3);
console.log("El arreglo de coeficiente 3 es:", nuevo_arreglo);

// e. Desestructuración de Arreglos
const [numero1, numero2, numero3, numero4, items] = array;
console.log("Arreglo deconstruido:", numero1, numero2, numero3, numero4, items);
/* ------------------------------------------------------------------------------------------------------------------ */
