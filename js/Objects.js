console.log("bienvenidos objetos");

let nombre = "Lina";
let apellido = "Minotta";
let edad = 18;

// objeto 
conrt persona = {
    nombre:"Lina",
    apellido: "Minotta"
    edad: 18
};


// renderizar el objeto completo
console.log("console.log desde un objeto", persona);

//renderizar una propiedad del objeto 
console.log("console.log desde la propiedad nombre del objeto", persona.nombre);
console.log("console.log desde la propiedad apellido del objeto", persona.apellido);
console.log("console.log desde la propiedad edad del objeto", persona.edad);
console.log("quiero entrar nombre y apellido de la persona", persona.nombre, persona.apellido);

//acceder a las propiedades del objeto con notaciones de corchetes 
console.log("-------------------- acceder a las propiedades del objeto  con notaciones de corchetes---------);






    const carro = {
        marca: "Toyota"
        modelo: "Corolla"
        año: 2020, 
        color: "rojo"
        precio: 20000
    };


    console.log("console.log desde un objeto carro ", carro);
    carro.precio = 15000;
    console.log("console.log desde un objeto carro con precio modificado ", carro);

    //resumen
    // crear objetos
    // acceder a las propiedades de un objeto // carro.color
    //sabemos modificar la propiedad de un objeto // carro.precio = 10000


    const persona2 = {
        nombre: "Lina",
        apellido: "Minotta",
        edad: 18,
        sumar: function() {

        },
        saludar(){
            return persona2.nombre + persona2.apellido;
        },
        multiplicar () => {

        }
    };

    console.log(persona2.saludar());
    console.log("la suma de dos numeros es : " )

