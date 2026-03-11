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
}git

