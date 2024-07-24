const user = {
  username: "cherry",
  price: 9990,

  welcomeMessage: function () {

    console.log(`${this.username} , welcome to website`); //this concept
    console.log(this); // ->output will be this function

  }
}

user.welcomeMessage()
user.username = "Jain" //change in context
user.welcomeMessage()

console.log(this); // output will be {} -> empty

function cherry() {
  username = "xyz"
  console.log(this.username); //-> undefined output (this will work only in DOM)
}

cherry()


const abcd = () => {
  let username = "Cherry"
  console.log(this.username); //undefined
  console.log(this); //{}
}

// basic syntax  of arrow function

const addTwo = (num1, num2) => {
  return num1 + num2
}

console.log(addTwo(3, 4))

//implicit return 

const addTwos = (num1, num2) => num1 + num2 // can wrap in bracket , but if there is curly bracket then return needs to be added
console.log(addTwos(3, 4))

//to return object

const addTwoss = (num1, num2) => ({ username: "cherry" })

console.log(addTwoss(3, 4))



