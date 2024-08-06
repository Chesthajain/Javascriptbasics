function test(arg1, arg2) {
  console.log(this.num, agr1, arg2);
}

test.call({ num: 100 }, 10, 300);


function test(...arguments) {
  console.log(this.num, arguments);
}

test.apply({ num: 100 }, [1, 2, 3]);

const person = {
  firstName: "Cherry",
  lastName: "Jain",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName: "xyz",
  lastName: "uvw",
}


let fullName = person.fullName.bind(member);
console.log(fullName());


//Closure
function sumFn(initialvalue) {
  let sum = initialvalue;
  function adder(val) {
    sum += val;
    return adder;
  }
  adder.toString = function () {
    return sum;
  }
  return adder;

}

const addition = sumFn(0);
console.log(addition(2)(3)(4).toString());
//+++++
function createSum(initialValue) {
  let sums = initialValue;

  function add(value) {
    sums += value;
    return add;
  };
  add.toString = function () {
    return sums;
  }
  return add;
}
const sums = createSum(0);

sums(5)(10)(15);
const total = sums(20);
console.log(total.toString());

function one(val) {
  let res = 2;
  return function two() {
    res = res * val;
    return res;
  }
}

const three = one(2);
console.log(three());
console.log(three(2));
console.log(three(2));

console.log('a' + 'b' + + 'c' + 'd');
console.log(++[[]][+[]] + [+[]]);

class NotEnoughCoffee extends Error {
  constructor(message) {
    super(message)
    this.name = this.constructor.name

    Error.captureStackTrace(this, this.constructor);

    this.isSleepy = true
  }
}

module.exports = NotEnoughCoffee

//++++++++++++++++++++++++

isprime(7);
function isprime(n) {
  let count = 0;
  if (n == 1 || n == 2) {
    console.log("Prime");
    return;
  }
  for (let i = 2; i * i < n; i++) {
    if (n % i == 0) {
      count++;
      break;
    }
  }
  if (count > 0) {
    console.log("not prime");
  } else {
    console.log("prime");
  }
}

let firstword = "Mary"
let secondword = "Army"

isAnagram(firstword, secondword);

function isAnagram(first, second) {
  a = first.toLowerCase();
  b = second.toLowerCase();

  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  if (a === b) {
    return console.log("Anagram");
  } else {
    return console.log("Not an Anagram");
  }
}

//+++++++++++++++
const arr = [1, 2, 3, 1, 2, 3, 4, 5, 2, 4, 5, 3, 6, 6, 7, 7, 8, 11, 32, 45, 32];

const returnMultipleDupeArray = (arr) => {
  let observed = {};
  let dupreArray = {};

}