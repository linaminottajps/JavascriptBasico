console.log("Hola, Lina Bienvenida");

/**
¿ que es una funcion ?



*/

function saludar(nombre){
    console.log("hola a todos : ", nombre)
}


saludar("Nata")
saludar("Luisa")
saludar("Jerel")
saludar("Juliana")

function sumar (a,b) {
    return
    console.log("aqui debo sumar");
}

function sumar2(a,b) {
    return a + b;
}

sumar(1,2);

const resultado = sumar2(10,20);
console.log(resultado)


//■ Ejercicios — Clase 03: Funciones


//Ejercicio 1 — Saludo personalizado

function saludar(nombre) {
  console.log("Hola, " + nombre + ", bienvenido a la clase");
}
saludar("Luisa");
saludar("Juliana");
saludar("Nataly");

//Ejercicio 2 — Doble de un número

function doble(numero) {
  return numero * 2;
} 
let resultado = doble(5);
console.log(resultado);

//Ejercicio 3 — Área de un rectángulo

function calcularArea(ancho, alto) {
  return ancho * alto;
}
let area = calcularArea(10, 5);
console.log("El área del rectángulo es:", area);

//Ejercicio 4 — Presentación completa

function presentar(nombre, edad, ciudad) {
  return "Me llamo " + nombre + ", tengo " + edad + " años y vivo en " + ciudad;
}
let mensaje = presentar("Lina", 37, "Cali");
console.log(mensaje);

//Ejercicio 5 — Convertir grados

function celsiusAFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
let temperatura = celsiusAFahrenheit(100);
console.log("100 grados Celsius son", temperatura, "grados Fahrenheit");

//■ NIVEL 2 — Funciones con if / else

//Ejercicio 6 — Mayor de edad

function verificarEdad(edad) {
  if (edad >= 18) {
    return "Mayor de edad";
  } else {
    return "Menor de edad";
  }
}
console.log(verificarEdad(20));
console.log(verificarEdad(15));

//Ejercicio 7 — Número par o impar

function parOImpar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Impar";
  }
}
console.log(parOImpar(8));
console.log(parOImpar(7));

//Ejercicio 8 — Aprobado o reprobado

function evaluarNota(nota) {
  if (nota >= 60) {
    return "Aprobado";
  } else {
    return "Reprobado";
  }
}
console.log(evaluarNota(75));
console.log(evaluarNota(50));

//Ejercicio 9 — Temperatura del clima

function describirClima(temperatura) {
  if (temperatura < 10) {
    return "Hace mucho frío";
  } else if (temperatura >= 10 && temperatura <= 25) {
    return "Clima agradable";
  } else {
    return "Hace calor";
  }
}
console.log(describirClima(5));
console.log(describirClima(18));
console.log(describirClima(30));

//Ejercicio 10 — Descuento de precio

function aplicarDescuento(precio, descuento) {
  if (descuento > 0) {
    let precioFinal = precio - (precio * descuento / 100);
    return precioFinal;
  } else {
    return precio;
  }
}
console.log(aplicarDescuento(100000, 20));
console.log(aplicarDescuento(50000, 0));

//■ NIVEL 3 — Combinando todo

//Ejercicio 11 — Acceso al sistema

function verificarAcceso(usuario, contrasena) {
  if (usuario === "admin" && contrasena === "1234") {
    return "Acceso concedido";
  } else if (usuario === "admin" && contrasena !== "1234") {
    return "Contrasena incorrecta";
  } else {
    return "Usuario no encontrado";
  }
}
console.log(verificarAcceso("admin", "1234"));

//Ejercicio 12 — Clasificar número

function clasificarNumero(numero) {
  if (numero > 0) {
    return "Positivo";
  } else if (numero < 0) {
    return "Negativo";
  } else {
    return "Cero";
  }
}
console.log(clasificarNumero(-5));

//Ejercicio 13 — Calcular envío

function calcularEnvio(total, membresia) {
  if (total > 50 || membresia === true) {
    return 0;
  } else {
    return 5;
  }
}
console.log(calcularEnvio(40, true));

//Ejercicio 14 — Categoría de usuario

function categorizarUsuario(puntos) {
  if (puntos > 1000) {
    return "VIP";
  } else if (puntos >= 500) {
    return "Premium";
  } else if (puntos >= 100) {
    return "Regular";
  } else {
    return "Nuevo";
  }
}
console.log(categorizarUsuario(750));

//Ejercicio 15 — Validar contraseña

function validarContrasena(contrasena) {
  if (contrasena.length >= 8 && contrasena !== "12345678") {
    return "Contrasena válida";
  } else {
    return "Contrasena débil";
  }
}
console.log(validarContrasena("segura123"));

//Ejercicio 16 — Calcular impuesto

function calcularImpuesto(salario) {
  if (salario < 1000) {
    return 0;
  } else if (salario <= 3000) {
    return salario * 0.10;
  } else {
    return salario * 0.20;
  }
}
console.log(calcularImpuesto(2500));

//Ejercicio 17 — Ticket de compra

function generarTicket(producto, cantidad, precio) {
  let total = cantidad * precio;
  return "Producto: " + producto + " | Cantidad: " + cantidad + " | Total: $" + total;
}
console.log(generarTicket("Cafe", 3, 3));

//Ejercicio 18 — Puede conducir

function puedeConducir(edad, licencia, alcohol) {
  if (edad < 18) {
    return "No puede conducir: es menor de edad";
  } else if (!licencia) {
    return "No puede conducir: no tiene licencia";
  } else if (alcohol) {
    return "No puede conducir: ha consumido alcohol";
  } else {
    return "Puede conducir";
  }
}
console.log(puedeConducir(20, true, false));

//Ejercicio 19 — Conversor de divisa

function convertirDivisa(dolares, moneda) {
  if (moneda === "EUR") {
    return dolares * 0.92;
  } else if (moneda === "MXN") {
    return dolares * 17;
  } else if (moneda === "COP") {
    return dolares * 4000;
  } else {
    return "Moneda no válida";
  }
}
console.log(convertirDivisa(10, "COP"));

//Ejercicio 20 — Calculadora completa

function calcular(num1, num2, operacion) {
  if (operacion === "sumar") {
    return num1 + num2;
  } else if (operacion === "restar") {
    return num1 - num2;
  } else if (operacion === "multiplicar") {
    return num1 * num2;
  } else if (operacion === "dividir") {
    if (num2 === 0) {
      return "Error: no se puede dividir entre cero";
    }
    return num1 / num2;
  } else {
    return "Operación no válida";
  }
}
console.log(calcular(10, 2, "dividir"));