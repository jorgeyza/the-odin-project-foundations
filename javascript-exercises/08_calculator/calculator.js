const add = function (number1, number2) {
  return number1 + number2;
};

const subtract = function (number1, number2) {
  return number1 - number2;
};

const sum = function (array) {
  return array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
};

const multiply = function (array) {
  return array.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  );
};

const power = function (number, power) {
  return number ** power;
};

const factorial = function (number) {
  let result = 1;
  for (let i = number; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
