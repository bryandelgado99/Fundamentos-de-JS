/* Instrucciones del Laboratorio 

1.	De forma grupal, realizar el laboratorio solicitado y por cada tema visto en clase debe ser aplicado a 
un ejemplo de la vida real que sea diferente a los vistos en clase.

2.	Una vez finalizado la tarea solicitada, la misma debe estar alojada en un repositorio de GitHub dentro de una nueva 
rama llamada “objetos-arreglos".

3.	Recuerda agregar al repositorio el respectivo archivo README.md, además, si deseas utilizar una plantilla para tu archivo README 
lo puedes hacer desde esta URL: https://readme.so/

*/

/* ------------------------------------------------- Manipulacion del DOM -------------------------------------------- */

// a. Cambio de mensaje

/*<html lang="en">
  <head>
    <title>Ejemplo de ''getComputedStyle''</title>

    <script type="text/javascript">*/
      function cStyles() {
        var RefDiv = document.getElementById("d1");

        var txtHeight = document.getElementById("t1");
        var h_style = document.defaultView
          .getComputedStyle(RefDiv, null)
          .getPropertyValue("height");
        txtHeight.value = h_style;

        var txtWidth = document.getElementById("t2");
        var w_style = document.defaultView
          .getComputedStyle(RefDiv, null)
          .getPropertyValue("width");
        txtWidth.value = w_style;

        var txtBackgroundColor = document.getElementById("t3");
        var b_style = document.defaultView
          .getComputedStyle(RefDiv, null)
          .getPropertyValue("background-color");
        txtBackgroundColor.value = b_style;
      }
    /*</script>

    <style type="text/css">
      #d1 {
        margin-left: 10px;
        background-color: rgb(173, 216, 230);
        height: 20px;
        max-width: 20px;
      }
    </style>
  </head>

  <body>
    <div id="d1">&nbsp;</div>

    <form action="">
      <p>
        <button type="button" onclick="cStyles();">getComputedStyle</button>
        height<input id="t1" type="text" value="1" /> max-width<input
          id="t2"
          type="text"
          value="2" />
        bg-color<input id="t3" type="text" value="3" />
      </p>
    </form>
  </body>
</html>*/

/* ------------------------------------------------- Asincronismo -------------------------------------------- */
const iterations = 10;
const numbers = [];

for (let i = 0; i < iterations; i++) {
  const number = 1 + Math.floor(Math.random() * 6);
  numbers.push(number);
  if (number === 6) {
    console.log("ERROR");
    break;
  }
}
console.log(numbers);


/* ------------------------------------------------- Asincrono vs Sincrono -------------------------------------------- */
// b. Sincronismo
function Sincrona(){
  for(let m=0; m>=3; m++){
    console.log('Sincrono: ' + m);
  }
}
Sincrona()

// c. Asincronismo
function Asincrono(){
  setTimeout(function (){
    for(let m=0; m>=3; m++){
      console.log('Asincrono: ' + m);
    }
  }, 400);
}

Asincrono()

// d. Asincronismo en flecha
setTimeout( () => {
  for(let m=0; m>=3; m++){
    console.log('Asincrono: ' + m);
  }
}, 400)
/* ------------------------------------------------- Promesas -------------------------------------------- */
const myPromise = new Promise((resolve, reject) => {  
  let condition = (Math.random().toFixed())*10;  

  if(condition >= 99) {   
      console.log(condition);
      resolve('Promise is resolved successfully.');  
  } else {    
      console.log(condition);
      reject('Promise is rejected');  
  }
});

myPromise.then((message) => { 
  console.log(message);
}).catch((message) => { 
  console.log(message);
});

/* ------------------------------------------------- Async/Await -------------------------------------------- */
const url = 'https://crunchbase-crunchbase-v1.p.rapidapi.com/autocompletes?query=%3CREQUIRED%3E';
const options = {
  async: true,
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b3c06a40damshcec612faa3a8bbdp13ce2bjsn158cd5408af4',
		'X-RapidAPI-Host': 'crunchbase-crunchbase-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
