// numeros = +prompt("ingrese un numero entre 1 y 100")

// if (1 <= numeros <= 100) {
//     for (let i = numeros; i >= 0; i--) {
//         console.log(i)
//     }
// } else {
//     console.log("Por favor, ingrese un numero entre 1 y 100")
// }




// tablas = +prompt("Ingrese un numero entre 1 y 10")

// if(tablas >= 1 && tablas <= 10){
//     console.log("Tabla de multiplicar para " + tablas + ":")
//     for (let i = 1; i <= 10; i++){
//         console.log(tablas + " x " + i + " = " + (tablas*i))       
//     }
// }else{
//     console.log("Por favor, ingrese un numero entre 1 y 10")
// }




// let numeroSuma = Number(prompt("Ingrese un numero, para terminar ingrese 0"))
// let sumaDeEllos = 0

// while(numeroSuma){
//     sumaDeEllos += numeroSuma
//     numeroSuma = Number(prompt("Ingrese un numero, para terminar ingrese 0"))
// }

// console.log(sumaDeEllos)



// let numero
// let suma = 0

// do{
//     numero = Number(prompt("Ingrese un numero, para terminar ingrese 0"))
//     suma += numero
// } while (numero);

// console.log(suma)




// const alumno = {
//     name:"Alejo",
//     lastname:"De Oli",
//     origin:"Argentina",
//     studies:"Secundario"
// }

// for (const key in alumno) {
//     console.log(key)
// }


// for (const key in alumno) {
//     console.log(alumno[key])
// }




// let sumaDeEllos = 35
// let intentos = 0

// while(true) {
//     let acertar = Number(prompt("Ingrese numeros"))
//     intentos++
//     if(acertar === sumaDeEllos){
//         console.log("Acertaste, el numero secreto era: 35 en " + intentos + " intentos.")
//         break;
//     }else if(acertar > sumaDeEllos){
//         console.log("El numero ingresado es mayor al numero secreto")
//     }else{
//         console.log("El numero ingresado es menor al numero secreto")
//     }
// }




// let numeroDivisor = Number(prompt("Ingrese un numero"))

// console.log("Los divisores de " + numeroDivisor + " son:")

// for (let i = 1; i <= numeroDivisor; i++){
//     if(numeroDivisor % i === 0){
//         console.log(i)
//     }

// }
    



// function ringBell(){
//     return "Ding Dong,";
// }

// let numeroVeces = Number(prompt("Ingrese cuantas veces sonara el timbre:"))

// if(numeroVeces){
//     for (let i = 0; i < numeroVeces; i++) {
//         console.log(ringBell())
//     }
// }




// const fechaLimite = "1997-8-3"
// const fechas = ["1984-10-2", "1990-3-2", "1973-15-7", "2024-21-10", "2001-1-9"]

// for (let i = 0; i < fechas.length; i++){
//     let fechaArray = fechas[i];
//     if(fechaArray >= fechaLimite){
//         console.log(fechas[i])
//     }
// }




// const colores = ["red", "blue", "green", "violet", "brown", "black", "white"]

// function colors() {
//     for (const color of colores) {
//     console.log(color);
// }
// }

// colors()




// let numbers = [4, 9, 20, 15, 6]

// for (const numeros of numbers) {
//     console.log("El numero es " + numeros + " y su doble es " +  numeros*2)
// }




// let integrantes = [
//     {
//         nombre: "Pedro",
//         edad: "47",
//         integrante: "padre",
//         apellido: "lopez"
//     },
//     {
//         nombre: "Patricia",
//         edad: "45",
//         integrante: "Madre",
//         apellido: "Garcia"
//     },
//     {
//         nombre: "Pablo",
//         edad: "21",
//         integrante: "Hijo",
//         apellido: "Lopez"
//     },
//     {
//         nombre: "China",
//         edad: "5",
//         integrante: "Mascota",
//         apellido: "Lopez garcia"
//     }
// ]

// function presentacionFamiliar(miembros){
//     for (const miembro of miembros) {
//         console.log(`Hola soy ${miembro.nombre} ${miembro.apellido} (${miembro.integrante}) y tengo ${miembro.edad} años.`)
//     }
// }

// presentacionFamiliar(integrantes)




// let sumarPares = 0
// let sumarImpares = 0

// while(true){
//     let numerosUsuario = Number(prompt("Ingrese un numero (ingrese 0 para finalizar)"))
    
//     if(numerosUsuario === 0){
//         break;
//     }

//     if(numerosUsuario % 2 === 0){
//         sumarPares += numerosUsuario
//     }else{
//         sumarImpares += numerosUsuario
//     }

// }

// console.log("La suma de los numeros pares es: " + sumarPares)
// console.log("La suma de los numeros impares es: " + sumarImpares)




const numerosGrandes = [102, 98, 234, 569, 82, 342, 412, 642, 500, 189]

let numeroMasGrande = numerosGrandes[0]

for (let i = 1; i < numerosGrandes.length; i++) {
    if(numerosGrandes[i] > numeroMasGrande){
        numeroMasGrande = numerosGrandes [i]
    }
    
}

console.log("El numero mas grande del array es: " + numeroMasGrande)