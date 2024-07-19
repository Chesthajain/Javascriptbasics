const accountId = 144553
let accounrEmail = "cherry@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 2 // no allowed
accountEmail = "cj@gmail.com"
accountPassword = "34567"
accountCity = "Pune"

/*
Prefer not to use var
because of issue in block scope and functional scope
node 01_basics/01_variables.js
*/



console.log(accountId);
console.table([accountId,accounrEmail,accountPassword,accountCity,accountState])