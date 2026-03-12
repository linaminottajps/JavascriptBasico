console.log("Variables JavaScript Lina");

// ¿ Que es una variable? 

// [] string // number // bool

// -- let -const
let age = 18;
console.log("age", age)

const firtName = "juliana";
console.log("mi nombre es :", firtName);

//firtName = "juliana perez";
//console.log("mi nombre actualizado es: ", firstName);

//convenciones
//nombre de las variables en camelCase
//nombre descriptivo

const bundles = "countries"


//Declarar variables que describan a una persona e imprimir en consola

const nombre = "Lina Minotta"
let edad = 37;
let peso = 61
let estatura = 1.61;
const genero = "femenino"
const RH = "O+"

console.log("esta es mi descripcion:","Soy", nombre, "mi edad es:", edad, "años,", "mi peso es:", peso, "Kg,", "mi estatura es:", estatura,"cm,", "mi genero es:", genero, "mi RH es:", RH)


//crear 3 variables
//DNI
//edad
//nacionalidad

//si tengo dni y soy mayor de edad y tengo nacionalidad 
//imprimir en consola puedo votar
//si tengo nacionalidad y soy mayor de edad 
//imprimir debes ir a la regiistraduria
//en caso contrarioimprimir en consola no puedes votar

let DNI = false;
let nacionalidad = true;
let newAge = 18;

if(DNI && newAge>18 && nacionalidad){
    console.log("puedo votar")
} else if(nacionalidad && newAge>=18 && !DNI){
    console.log("ir a la registraduria")
}else{
    console.log("no puede votar")
}

//Ejercicios de Condicionales en JavaScript

//Nivel 1 — if simple

//Ejercicio 1 — Mayor de edad

let annos = 18; 
if(annos >= 18) {
    console.log("puede ir a la universidad");
}else {
    console.log("no puede ir a la universidad");
}

//Ejercicio 2 - Tiene dinero

let dinero = 120;
if(dinero > 100) {
    console.log("Puede comprar");
    }else {
        console.log("no puede comprar");
    }

//Ejercicio 3 — Número positivo

let numero = 3;
if(numero>= 0) {
    console.log("Es positivo");
}else {
    console.log("Es negativo");
}

//Ejercicio 4 Contraseña correcta (===)

let contrasena = "abc123"
if(contrasena === "abc123") {
console.log("Acceso concedido");
}else { 
    console.log("Acceso denegado");
}

//Ejercicio 5 Diferencia entre == y ===

let nummero = 5;
let texto = "5";
if(nummero == texto) {
    console.log("Con == Son iguales, porque solo compara el valor");
}else {
    console.log("Con === No son iguales porque compara el valor y el tipo");
}

//Ejercicio 6 Temperatura fría

let clima = 10;
if (clima < 15) {
    console.log("Hace frio, lleva abrigo");
    }else {
        console.log("El clima esta bien");
    }

//Ejercicio 7 Negación !

let usuarioRegistrado = false;
if(!usuarioRegistrado) {
    console.log("Debe crear una cuenta");
 } else {console.log("Bienvenido");
 }


//Ejercicio 8 — Tiene licencia

let LinaTieneLicencia = false;
if(LinaTieneLicencia) {
    console.log("No puede conducir");
}else {console.log("puede conducir");
}

//Ejercicio 9 — Aprobó el examen

let Nota = 62; 
if(Nota >= 60) {
    console.log("Aprobado");
}else {
    console.log("Reprobado");
}

//Ejercicio 10 — Luces encendidas

let lucesEncendidas = true;
if(lucesEncendidas) {
    console.log("Apaga las luces");
}else { console.log("Las luces estan apagadas, todo bien");
}

 //NIVEL 2 — else if y operador || (O)
//Ejercicio 11 Semaforo

let color = "verde";
if (color === "verde") {
  console.log("Ya puede avanzar");
} else if (color === "amarillo") {
  console.log("Disminuya la velocidad");
} else if (color === "rojo") {
  console.log("Debe detenerse");
} else {
  console.log("Color no válido");
}

//Ejercicio 12 — Calificación con letras

let nota = 95;
if (nota >= 90 && nota <= 100) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else {
  console.log("F");
}

//Ejercicio 13 — Turno del día
let hora = 18;

if (hora >= 0 && hora <= 5) {
  console.log("Madrugada");
} else if (hora >= 6 && hora <= 11) {
  console.log("Mañana");
} else if (hora >= 12 && hora <= 17) {
  console.log("Tarde");
} else if (hora >= 18 && hora <= 23) {
  console.log("Noche");
} else {
  console.log("Hora no valida");
}

//Ejercicio 14 Acceso al sistema con ||

let usuario = "admin";
if (usuario === "admin" || usuario === "moderador") {
  console.log("Acceso permitido");
} else {
  console.log("Acceso denegado");
}

//Ejercicio 15  — Día del fin de semana con ||

let diia = "sabado";
if (diia === "sabado" || diia === "domingo") {
  console.log("Es fin de semana");
} else {
  console.log("Es dia de semana");
}

// NIVEL 3 — Combinaciones y lógica avanzada

//Ejercicio 21 — Login de usuario

let usuuario = "jerel";
let contrasenna = "1234";

if (usuuario === "jerel" && contrasenna === "1234") {
  console.log("Sesion iniciada");
} else if (usuuario === "jerel" && contrasenna !== "1234") {
  console.log("Contraseña incorrecta");
} else {
  console.log("Usuario no encontrado");
}

//Ejercicio 23 — Puede adoptar una mascota

let eddad = 20;
let viveEnApartamento = false;
let ingresos = 1200;

if (eddad > 18 && !viveEnApartamento && ingresos > 1000) {
  console.log("Puede adoptar");
} else {
  console.log("No cumple los requisitos");
}
//Ejercicio 25 — Estación del año

let mes = 13;

if (mes === 12 || mes === 1 || mes === 2) {
  console.log("Invierno");
} else if (mes >= 3 && mes <= 5) {
  console.log("Primavera");
} else if (mes >= 6 && mes <= 8) {
  console.log("Verano");
} else if (mes >= 9 && mes <= 11) {
  console.log("Otoño");
} else {
  console.log("No es un mes valido");
}

//Ejercicio 27 — Nivel de batería

let bateria = 65;

if (bateria > 80) {
  console.log("Bateria alta");
} else if (bateria >= 20 && bateria <= 80) {
  console.log("Bateria media");
} else if (bateria < 20) {
  console.log("Bateria baja, conecta el cargador");
}
//Ejercicio 29 — Validar formulario

let noombre = "Lina Minotta";
let eedad = 37;
let emaail = "linaminotta@gmail.com";

if (noombre === "") {
  console.log("El nombre no puede estar vacio");
} else if (eedad <= 0) {
  console.log("La edad debe ser mayor a 0");
} else if (!emaail.includes("@")) {
  console.log("El email no es válido");
} else {
  console.log("Formulario enviado");
}