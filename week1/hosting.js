
const cube = function(x) {
  return x * x * x;
};

const fullName = function(first, last) {
  return first + " " + last;
};

const power = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
};

const sumCubes = function(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
};

//message is defined after the call. Var is seen as a declaration but doesnt have an assigned value
// 'let' is executed in order of its appearaance, thence the error
//its a function expression, so it can not be reached before it is initialised, thence the error
// functions are accessible anywhere

let values = [10, 20, 30]; //needs to be before

for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}

let lastLogin = '1/1/1970'; //needs to be before

console.log(welcome('Charlie', 'Munger'));

function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`;
}