//for loop

for (let index = 0; index <= 10; index++) {
  const element = index;
  if (element == 5) {
    console.log("This is five");
  }
  console.log(element);
}


for (let i = 0; i <= 10; i++) {
  console.log(`outer loop value: ${i}`);
  for (let j = 0; j <= 10; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);
  }
}


for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i + '*' + j + '=' + i * j);
  }
}

let myarray = ["apple", "mango", "banana"]
console.log(myarray.length);

for (let i = 0; i < myarray.length; i++) {
  const element = myarray[i];
  console.log(element);

}


// break and continue

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    break
  }
  console.log();

}

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue
  }
  console.log();

}

let indexs = 0
while (indexs <= 10) {
  console.log(`value of index is ${indexs}`);
  indexs += 2;
}

let marray = ['apple', 'mango', 'banana']

let arr = 0
while (arr < marray.length) {
  console.log(`value is ${marray[arr]}`);
  arr = arr + 1
}

//do while
let score = 1
do {
  console.log(`score is ${score}`);
  score++
} while (score <= 10);


//for of

//["" , "" , ""]
//[{} , {} , {}]

const arry = [1, 2, 3, 4, 5]

for (const num of arry) {
  console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "united states")
map.set('Fr', "France")

console.log(map);

for (const [key, value] of map) {
  console.log(key, ':-', value);
}

const myObject = {
  'game1': 'NFS',
  'game2': 'Spiderman'
}

//for (const [key, value] of myObject) {
//console.log(key, ':-', value);
//} //error


const Obj = {
  js: 'javascript',
  cpp: 'C++',
  rc: "ruby",
  swift: 'Swift by apple'
}

for (const key in obj) {
  console.log(`${key} shortcut is for ${obj[key]}`);
}


const program = ["js", "rb", "py"]

for (const key in program) {
  console.log(program[key]);
}

const maps = new Map() //non-iteratable
map.set('IN', "India")
map.set('USA', "united states")
map.set('Fr', "France")

for (const key in maps) {
  console.log(key);
}

const coding = ["js", "ruby", "python", "cpp"]

coding.forEach(function (val) {
  console.log(val);
})

coding.forEach((item) => {
  console.log(item);
})

function printMe(item) {
  console.log(item);
}

coding.forEach(printMe)

coding.forEach((item), index, arr => {
  console.log(item, index, arr);

})

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js"
  },
  {
    languageName: "Java",
    languageFileName: "Java"
  },
  {
    languageName: "Python",
    languageFileName: "py"
  }

]

myCoding.forEach((item) => {
  console.log(item.languageName);
})


const values = coding.forEach((item) => {
  console.log(item);
  return item
})

console.log(values); //undefined

//Filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNums = myNums.filter((num) => num > 4)
console.log(newNums);

const numm = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const nummm = numm.filter((num) => {
  return num > 4 //for scope return is must
})
console.log(newNums);

const newNumss = []

myNums.forEach((num) => {
  if (num > 4) {
    newNumss.push(num)
  }
})

//filter on large objects

let userBooks = books.filter((bk) => bk.genre == 'History')

usBooks = books.filter((bk) => {
  return bk.publish >= 2000 && bk.genre === "History"
})
console.log(usBooks);

const mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumns = mynumbers.map((num) => { return num + 10 })
console.log(newNums);


const newwNums = myNumers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num => num >= 40))

console.log(newwNums);

const abcd = [1, 2, 3]
const xyz = abcd.reduce
  (function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
  }, 0)

const mytotal = xyz.reduce((acc, curr) => acc + curr, 0)

console.log(xyz);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999
  },
  {
    itemName: "py course",
    price: 5999
  },
  {
    itemName: "mobile dev course",
    price: 6999
  }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);