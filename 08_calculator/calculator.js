const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = function(arr) {
  let sum = 0;
  arr.forEach(num => sum += num)
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  arr.forEach(num => product *= num)
  return product;
};

const power = function(num, power) {
	return Math.pow(num, power)
};

const factorial = function(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorial(num - 1));
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
