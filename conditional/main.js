// let num1 = 4;
// let num2 = 5;

// if(num1 > num2){
//     console.log("num1")
// }
// else if(num2 > num1){
//     console.log("num2")
// }
// else{
//      console.log("los numeros son iguales");
// }

// if (num1 == num2){
//     console.log("Los numeros son iguales")
// }else{
//     console.log("Los numeros son diferentes")
// }




// let date1 = "2018-9-2"
// let date2 = "2023-7-5"

// if (date1 > date2){
//     console.log(`La fecha ` + date1 + ` es mayor que ` + date2)
// }else if( date2 > date1){
//     console.log(`La fecha ` + date2 + ` es mayor que ` + date1)
// }
// else{
//     console.log("Las fechas son iguales")
// }




// let number1 = 6

// let number2 = 7

// let number3 = 9


// if (number1 > number2){
//     console.log("El numero [number1] es el mayor")
// }else if (number2 > number3){
//     console.log("El numero [number2] es el mayor")
// }else{
//     console.log("El numero [number3] es el mayor")
// }




// let color = prompt("Ingrese un color")

// switch(color){
//     case `red`:
//         alert("El color de la pasion")
//     break;
//     case `blue`:
//         alert("El color del mar")
//     break;
//     case `green`:
//         alert("El color de la naturaleza")
// }




// const operation = prompt("Ingrese una operacion")
// const value1 = Number( prompt(`Ingrese un primer valor (numero del 1 al 100)`) )
// const value2 = Number( prompt(`Ingrese un segundo valor (numero del 1 al 100)`) )

// switch (operation){
//     case "sumar":
//         alert(`El resultado de la suma es: ${ value1 + value2 }`)
//     break;
//     case "restar":
//         alert(`El resultado de la suma es: ${ value1 - value2 }`)
//     break;
//     case "multiplicar":
//         alert(`El resultado de la suma es: ${ value1 * value2 }`)
//     break;
//     case "dividir":
//         alert(`El resultado de la suma es: ${ value1 / value2 }`)
//     break;
//     default:
//         alert(`Operacion no valida`)
//     break;
// }




// let persona1 = {
//     nombre: "Alejo",
//     edad: 23,
//     altura: 1.83
// }

// let persona2 = {
//     nombre: "ivan",
//     edad: 25,
//     altura: 1.85
// }

// if (persona1.altura > persona2.altura){
//     console.log(persona1.nombre + " es mas alto que " + persona2.nombre)
// }else if (persona1.edad > persona2.edad){
//     console.log(persona1.nombre + " es mayor que " + persona2.nombre)
// }else{
//     console.log(persona2.nombre + " tiene mas altura y es mayor que " + persona1.nombre)
// }




// const name = prompt("Ingrese su nombre")
// const edad = prompt("Ingrese su edad")
// const altura = prompt("Ingrese su altura") 
// const vision = prompt("Ingrese su nivel de vision")

// if (edad < 18){
//     console.log(name + " No estas capacitado para conducir")
// }else if(altura < 150){
//     console.log(name + " No estas capacitado para conducir")
// } else if(vision < 8){
//     console.log(name + " No estas capacitado para conducir")
// }else{
//     console.log( name + " Estas capacitado para conducir")
// }




// const edadIngresada = prompt("Ingrese su edad")

// if (edadIngresada <= 12){
//     alert("Eres un infante")
// }else if (edadIngresada <= 18){
//     alert("Eres un adolescente")
// }else if (edadIngresada <= 45){
//     alert("Eres un mayor joven")
// }else if (edadIngresada <= 100){
//     alert("Eres un anciano")
// }else{
//     alert("Enrealidad tienes esta edad?")
// }




// const valor = prompt("Ingrese un numero del 1 al 3")
// const valor1 = prompt("Ingrese un numero que desee")

// switch (valor){
//     case "1":
//         alert(`El numero ingresado es ${ valor1 }`)
//     break;
//     case "2":
//         alert(`El doble del numero ingresado es ${ valor1 * 2 }`)
//     break;
//     case "3":
//         alert(`El triple del numero ingresado es ${ valor1 * 3 }`)
//     break;
//     default:
//         alert(`Ese valor no esta permitido`)
//     break;
// }




let cliente = {
    nombre: prompt("Ingrese su nombre"),
    pase: prompt("¿Pase: vip o normal?"),
    entrada: prompt("Entrada: si o no")
}

if (cliente.nombre == "alejo" || cliente.pase == "vip") {
    alert("Bienvenido al programa")
} else if (cliente.entrada == "si") {
    let utilizarEntrada = prompt("Desea utilizar su entrada?")
        if (utilizarEntrada == "si") {
            alert("Bienvenido al programa")
        } else {
            alert("Hasta luego")
        }
} else {
    let deseaComprar = prompt("¿Desea comprar una entrada?")
    if (deseaComprar == "si") {
        let dineroDisponible = +prompt("¿Cuanto dinero disponible tiene?");
        if (dineroDisponible >= 1000) {
            alert("Venta exitosa. Bienvenido al programa")
        } else {
            alert ("Venta rechazada. Dinero insuficiente, hasta luego")
        }
    } else {
        alert("Hasta luego")
    }
}