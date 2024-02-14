const myname = "Alejo Ian";
const mylastname = " De Oli";
let myage = 23;
const mypet = "Doc";
let petage = 3;
const fullname = myname + mylastname;
const presentationtext = "Hola, me llamo " + fullname + ", tengo " + myage + " años. Mi gato se llama " + mypet + ", y el tiene " + petage + " años."

const sumages = myage + petage
const subtractages = myage - petage
const productages = myage * petage
const divisionages = myage / petage

const student = {
     myname : "Alejo Ian",
     mylastname : "De Oli",
     myage : 23,
     mypetname : "Doc",
     favoritecolor : "Verde"
}   

const pet = {
    pet : "Gato",
    petname : "Doc",
    petage : 3,
    colorpet : "Naranja",
    petaspect : "Esponjoso"
}

let fruits = [ "frutilla", "manzanas", "kiwi", "durazno", "ciruela"]

let edadcliente = prompt("Tell me your age")
let iamadult = 18 <= edadcliente

let numbers = [ " 1", " 2", " 3", " 4", " 5"]

let family = [ {nombre : " Alejo", edad : " de 23 años"}, {nombre:" Ivan", edad:" de 24 años"}, {nombre:" Pablo", edad:" de 21 años"}, {nombre:" Patricia", edad:" de 48 años"}, {nombre:" Marcelo", edad:" de 47 años"}]

const randomtext = "A" + family[0].nombre + family[0].edad + " le gusta comer" + numbers[3] + " " + fruits[1] + " repartidas a lo largo de la semana"

console.log(myname)
console.log(mylastname)
console.log(myage)
console.log(mypet)
console.log(petage)
console.log(fullname)
console.log(presentationtext)
console.log(sumages)
console.log(subtractages)
console.log(productages)
console.log(divisionages)
console.table(student)
console.table(pet)
console.log(fruits [0])
console.log(fruits [1])
console.log(fruits [2])
console.log(fruits [3])
console.log(fruits [4])
console.log(`I am an adult : ${iamadult}`)
console.log(numbers [0])
console.log(numbers [1])
console.log(numbers [2])
console.log(numbers [3])
console.log(numbers [4])
console.log(family [0])
console.log(family [1])
console.log(family [2])
console.log(family [3])
console.log(family [4])
console.log(randomtext)