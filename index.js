const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const palabras = [
  "programa",
  "desarrollo",
  "javascript",
  "github",
  "nodemon",
  "aplicacion",
  "pikachu",
  "factorial",
  "multiplicacion",
  "division",
  "quasimodo",
];

function funcionIntentos(numero) {
  if (numero === 0) {
    return;
  }
  console.log("intentos restantes: ", numero);
  intentos(numero - 1);
}

// let palabraAleatoria = palabras[Math.round(Math.random() * 10)];

let palabraAleatoria = "palabra"

let palabra = palabraAleatoria.split(""); // f2 para cambiar todos los lugares de una variable

let intentos = 7;

let letrasAdivinadas = [];

let palabraOculta = new Array(palabra.length).fill("_");

function adivinaLaPalabra() {
  console.log(palabraOculta);


  if (palabraOculta.join("") === palabra.join("")) {
    console.log(`felicidades has ganado`);
    rl.close();
    return;
  }
  if (intentos === 0) {
    console.log("lo sentimos has perdido, intente nuevamente");
    rl.close();
    return;
  }
  rl.question("Escribe una letra: ", (letra) => {
    if (letrasAdivinadas.indexOf(letra) >= 0) {
        console.log(`la letra ${letra} ya fue adivinada`);
        adivinaLaPalabra()
        return
        
    }
    if (palabra.indexOf(letra) >= 0) {
      letrasAdivinadas.push(letra);
      for (let index = 0; index < palabra.length; index++) {
        if (palabra[index] === letra) {
          palabraOculta[index] = letra;
        }
      }
      adivinaLaPalabra();
    } else {
      intentos = intentos - 1;
      console.log(`fallaste, aun te quedan ${intentos} intentos`);
      adivinaLaPalabra();
    }
  });
}

adivinaLaPalabra();
