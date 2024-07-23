const twitter = {}

twitter.id = "123"
twitter.isLoggedIn = false

const regularuser = {
  email: "xyz@gmail.com",
  fullName: {

    userfullname: {
      firstname: "Cherry",
      lastname: "Jain"

    }

  }
}

console.log(regularuser.fullName.userfullname.lastname);


//object.assign ({}, obj1 , obj2)
//{...obj1 , ...obj2} -> spread
// Object.keys()
//Object.values()
//Object.enteries()
//.hasOwnProperty()

//Convert in arrays

//const {Value need to extract : assignAname} = objName 


const navbar = ({ company }) => {

}

navbar() //A way to destructor

{
  name: "Cherry"
  coursename: "xyz"
}

[
  {},
  {},
  {}
] //json