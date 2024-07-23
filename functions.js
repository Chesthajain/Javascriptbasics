function myname() {

}

myname() //execution of function

function additions(num1, num2) {

  console.log(num1 + num2);

}

additions(3, 4)


function additions(num1, num2) {

  let result = num1 + num2;
  return result

}

const result = additions(3, 4)
console.log(result); // only after return we can assign variable  like result here

function loginuser(username) {
  return `${username} just loggedin`
}

console.log(loginuser("cherry"))//if a value is not passed then resul -> undefined

function loginuser(username) {
  if (username === undefined) { // if(!username)
    console.log("Please enter a user name")
    return
  }
  return `${username} just loggedin`
}


//Shopping cart - if number of arguments are unknown -> use rest operator

function calculateCartPrice(...num1) {
  return num1

}

console.log(calculateCartPrice(200, 400, 500)) //->array will be the result

const user = {
  username: "cherry",
  price: 1090
}

function handleObject(anyobject) {
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

const myarray = [200, 400, 500, 600]

function returnsecondvalue(getArray) {
  return getArray[2]

}

console.log(returnsecondvalue(myarray));
console.log(returnsecondvalue([200, 400, 600]));