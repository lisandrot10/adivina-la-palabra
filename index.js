const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const palabrasFaciles = [
  { palabra: "Gato", pista: "Animal doméstico que maúlla." },
  { palabra: "Sol", pista: "Estrella que ilumina y calienta la Tierra." },
  { palabra: "Casa", pista: "Lugar donde vivimos." },
  { palabra: "Libro", pista: "Objeto con páginas que leemos." },
  { palabra: "Mesa", pista: "Mueble con patas donde comemos o trabajamos." },
  { palabra: "Flor", pista: "Parte colorida de una planta." },
  {
    palabra: "Coche",
    pista: "Vehículo con cuatro ruedas que usamos para transportarnos.",
  },
  { palabra: "Pan", pista: "Alimento hecho de harina y agua, horneado." },
  {
    palabra: "Luna",
    pista: "Satélite natural de la Tierra que vemos de noche.",
  },
  { palabra: "Perro", pista: "Animal doméstico que ladra." },
  {
    palabra: "Lápiz",
    pista: "Instrumento que usamos para escribir o dibujar.",
  },
];

const palabrasIntermedias = [
  {
    palabra: "Bicicleta",
    pista: "Medio de transporte con dos ruedas que se mueve al pedalear.",
  },
  {
    palabra: "Televisión",
    pista: "Dispositivo que usamos para ver programas y películas.",
  },
  { palabra: "Puente", pista: "Estructura que permite cruzar ríos o valles." },
  {
    palabra: "Tijeras",
    pista: "Herramienta que usamos para cortar papel o tela.",
  },
  {
    palabra: "Cámara",
    pista: "Dispositivo que usamos para tomar fotos o grabar videos.",
  },
  {
    palabra: "Montaña",
    pista: "Es una elevación natural del terreno, más alta que una colina.",
  },
  {
    palabra: "Computadora",
    pista:
      "Dispositivo electrónico que usamos para trabajar, jugar y navegar por internet.",
  },
  { palabra: "Avión", pista: "Medio de transporte que vuela por el cielo." },
  {
    palabra: "Teléfono",
    pista: "Dispositivo que usamos para hacer llamadas y enviar mensajes.",
  },
  { palabra: "Reloj", pista: "Objeto que usamos para saber la hora." },
];

let palabraAleatoria = "";

let pista = "";

let palabra = palabraAleatoria.split(""); // f2 para cambiar todos los lugares de una variable

let intentos = 7;

let letrasAdivinadas = [];

let palabraOculta = new Array(palabra.length).fill("_");

let numeroAleatorio = Math.round(Math.random() * 10);

function dificultad() {
  rl.question(
    "Hola, bienvenido al juego de adivina la palabra, quieres una palabra facil o intermedia? ",
    (opcion) => {
      if (opcion === "facil") {
        palabraAleatoria = palabrasFaciles[numeroAleatorio].palabra;
        pista = palabrasFaciles[numeroAleatorio].pista;
        return
      }

      if (opcion === "intermedio") {
        palabraAleatoria = palabrasIntermedias[numeroAleatorio].palabra;
        pista = palabrasIntermedias[numeroAleatorio].pista;
        return
      }
    }
  );
}

function adivinaLaPalabra() {
  dificultad();

  console.log(palabraOculta);
  console.log(pista);

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
      adivinaLaPalabra();
      return;
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
