//Immedialtely  Invoked function expression
(function abcd() {
  console.log(`hey!`)
})(); //named iife

//to avoid pollution from global scope

(() => {
  console.log(`Hey! ${name}`);
})(`cherry`) //simple iife