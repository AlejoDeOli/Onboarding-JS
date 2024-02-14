let numero = 100
let numero1 = 20

// function sumar (numero, numero1){
//     let resultado = numero*numero1;
//     return resultado;
// }

// let returnDeLaFuncion = sumar(numero, numero1)

// console.log(returnDeLaFuncion)




// const fnAnonima = function(){
//     console.log(numero*numero1)
// }
// fnAnonima()




// const sumar = (numero, numero1) => numero * numero1;
// console.log(sumar(numero, numero1));




// function saludar(nombre) {
//     console.log("Hola, " + nombre + " Bienvenido/a.");
// }

// saludar("Alejo")




// const fnAnonima = function(num1, num2){
//     return num1 * num2;
// }

// let resultado = fnAnonima (4, 8)

// console.log("El resultado de la multiplicacion es: " + resultado)




// function area (num1, num2){
//     return (num1*num2) /2
// }

// let resultadoArea = area (3, 5)

// console.log("El area del triangulo es: " + resultadoArea)

// function perimetro (num1, num2, num3){
//     return num1+num2+num3
// }

// let resultadoPerimetro = perimetro (3, 5, resultadoArea)

// console.log("El perimetro del triangolo es: " + resultadoPerimetro)




// const productos = (producto, precio) => {

//     if(producto < 0 || precio < 0){
//         return "Los parámetros deben ser números positivos.";
//     }

//     let total = producto*precio;

//     if (producto >= 10 && producto < 20) {
//         total *= 0.9;
//       } else if (producto >= 20) {
//         total *= 0.8;
//       }

//     return total;
// }

// let resultadoTotal = productos(25,5)

// console.log("El total de la comra es: " + resultadoTotal);




// function esMayorDeEdad (num1){
//     if (num1 < 18){
//         console.log("Eres menor de edad")
//     }else if(num1 <= 100){
//         console.log("Eres mayor de edad")
//     }
//     else{
//         console.log("Realmente estas vivo?")
//     }
// }

// let resultadoEdad = esMayorDeEdad(101)




// function impuestos (ingresos){
//     if(ingresos <= 10000){
//         ingresos*= 0.1
//     }else if(ingresos > 10000 && ingresos < 20000){
//         ingresos*=0.15
//     }else if(ingresos > 20000){
//         ingresos*=0.2
//     }
//     return ingresos
// }

// let resultadoImpuestos = impuestos(30000)

// console.log("El impuesto a abonar es: " + resultadoImpuestos)




// function diaLaboral (dia){
//     switch(dia){
//         case 1:
//             console.log("Es un dia laboral")
//         break;
//         case 2:
//             console.log("Es un dia laboral")
//         break;
//         case 3:
//             console.log("Es un dia laboral")
//         break;
//         case 4:
//             console.log("Es un dia laboral")
//         break;
//         case 5:
//             console.log("Es un dia laboral")
//         break;
//         case 6:
//             console.log("Es fin de semana")
//         break;
//         case 7:
//             console.log("Es fin de semana")
//         break;
//         default:
//             console.log("Ese dia de la semana no existe")
//         break;
//     }

//     return dia

// }

// let resultadoDia = diaLaboral (8)




// function datosUsuario () {
//     const nombre = prompt("Ingrese su nombre:");

//     if (!nombre) {
//         console.error("El nombre no puede estar vacío.");
//         return;
//     }

//     const apellido = prompt("Ingrese su apellido:");

//     if (!apellido) {
//         console.error("El apellido no puede estar vacío.");
//         return;
//     }

//     const edadTexto = prompt("Ingrese su edad:");

//     const edad = Number(edadTexto);

//     if (edad <= 0) {
//         console.error("La edad debe ser un número válido y mayor a cero.");
//         return;
//     }

//     const usuario = {
//         nombre,
//         apellido,
//         edad,
//     };

//     console.log("Datos del usuario:", usuario);
// };


// datosUsuario();




// function saludar(nombre) {
//     return "Hola mi nombre es " + nombre
// }

// function calcularEdad(añoNacimiento, añoActual) {
//     return añoActual - añoNacimiento;
// };

// function presentarse() {
//     const nombre = prompt("Ingrese su nombre:")

//     if (!nombre) {
//         alert("El nombre no puede estar vacio");
//         return;
//     }

//     const añoNacimientoTexto = prompt("Ingrese su año de nacimiento:")

//     const añoNacimiento = Number(añoNacimientoTexto)

//     if(añoNacimiento <= 0 ){
//         alert("El año de nacimiento debe ser un numero mayor a 0")
//     }

//     const añoActualTexto = prompt("Ingrese el año actual:")

//     const añoActual = Number(añoActualTexto)

//     if(añoActual <= 0 ){
//         alert("El año debe ser un numero mayor al de nacimiento")
//     }

//     const saludo = saludar(nombre);
//     const edad = calcularEdad(añoNacimiento, añoActual);

//     alert(saludo + " y tengo " + edad + " años")
// }

// presentarse()