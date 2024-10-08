// how we are putting data into memory and how we can access stored data from memory data-types are divided into two parts

//  Primitive : call by value {copy}

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) : call by referance

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);

//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive)  ||  Heap(Non-Primitive)

let myName = "Anurag";
let myFullName = myName
myFullName = "Kesarwani Anurag"

// console.log(myName)
// console.log(myFullName)

let myJio = {
    id: 12121,
    name: "Jio",
    number: 987650
}


let myAirtel = myJio
myJio.id = 11;

console.log(myAirtel.id)
console.log(myJio.id)