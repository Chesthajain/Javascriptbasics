//if 

/*if (condition must be true) {

}
if (false) {

}*/


const isUserlogggedIn = true
const temperature = 41

if (temperature == 41) {
  console.log("less than 50")
} else {
  console.log("More that 50");
}

const score = 200
if (score > 100) {
  const power = "fly"
  console.log(`user power: ${power}`)
}

console.log(`user power: ${power}`) // power is not defined out of scope


// == equality === also check typeof 

const balance = 1000

if (balance > 500) console.log("test");

//nesting

if (balance < 500) {
  console.log("less than");
} else if (balance < 750) {
  console.log("less tham 750");
} else {
  console.log("less than 1200");
}

const userLoggedIn = true
const debitcard = true
const loggedInGoogle = false
const loggedInmail = true


if (userLoggedIn && debitCard) {
  console.log("allow to buy");
}

if (loggedInGoogle || loggedInmail) {
  console.log("User logged in");
}

// Switch case

switch (key) {
  case value:

    break;

  default:
    break;
}


const month = 3 //"March"
switch (month) {
  case 1: //"jan"
    console.log("jan");
    break;
  case 2: //"feb"
    console.log("feb");
    break;
  case 3:
    console.log("march");
    break;
  case 4:
    console.log("april");
    break;

  default:
    console.log("default case match");
    break;
}
// truthy

const userEmail = "c@cherry.ai" // []

if (userEmail) {
  console.log("got mail");
} else {
  console.log("dont have any");
}

//falsy value -> false , 0 , -0 , BigInt 0n , "", null , undefined , NaN

// truthy  -> "0" , 'false' , "<space>" , [] , {} , fucntion(){}

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).lenth === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10 //5
let val2 = null ?? 10 //10
let var3 = undefined ?? 15 //15

let val5 = null ?? 10 ?? 15 // 10
console.log(val1);

//Terniary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");