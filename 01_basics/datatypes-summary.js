// Primitive DT
// 7 types: string , number , boolean , null , undefined , symbol , BigInt

// dynamically typed

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

//const bigNumber = 454453234446688n;

// Reference (non-P DT)
// Array , Objects , Functions

const heros = ["shaktiman" , "naagraj" , "doga"]; // array
let myObj = {
    name: "Cherry",
    age: 24,
}  // Object

const myFunction = function() {
    //console.log("Hello");  
}

console.log(typeof bigNumber);

// null - typeof is object
//for object -> Function
//Function return function but called as object function

//+++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap(non-primitve)

let myname = "Cherryjain"

let anothername = myname
anothername = "xyz"

console.log(myname)
console.log(anothername)

let userOne = {
    email:"xyz@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "abc@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);