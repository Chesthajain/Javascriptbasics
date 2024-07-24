
let a = 300 //global scope
if (true) { // value inside curly braces -> block scope

  let a = 10
  const b = 20
  var c = 30

  //console.log("inner value: " , a)

} //avoid using var -> bcz it is out of scope


for (let i = 0; i < Array.length; i++) {
  const element = array[i];
}

//closure

function one() {
  const username = "cherry"

  function two() {
    const website = "xyz"
    console.log(username);
  }
  //console.log(wesbite); ->error
  two()
}//two can access one , its global while one cannot
one()

if (true) {
  const username = "cherry"
  if (username === "cherry") {
    const website = "youtube"
    console.log(username + website);
  }
  //console.log(websie) //->error
}

//console.log(username) //error ->out of scope

function addone(num) {
  return num + 1
}

addone(5)

const addTwo = function (num) {
  return num + 2
}

addTwo(5)

