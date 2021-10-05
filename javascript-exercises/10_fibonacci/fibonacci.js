const fibonacci = function (number) {
  if (number < 0) {
    return 'OOPS';
  }
  const f0 = 1;
  let num1 = 0;
  let num2 = 1;
  let sum = 0;
  let fibNumbers = [f0];
  for (let i = 1; i < number; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    fibNumbers.push(num2);
  }
  return fibNumbers[fibNumbers.length - 1];
};
fibonacci(5);

// Do not edit below this line
module.exports = fibonacci;
