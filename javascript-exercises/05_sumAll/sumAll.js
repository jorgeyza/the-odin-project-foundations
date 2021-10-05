const sumAll = function (a, b) {
  if (a < 0 || b < 0) {
    return 'ERROR';
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'ERROR';
  }
  const maxNumber = a > b ? a : b;
  const minNumber = a > b ? b : a;
  let result = 0;
  for (let i = minNumber; i <= maxNumber; i++) {
    if (i !== maxNumber) {
      result += i;
    } else if (i === maxNumber) {
      result += maxNumber;
      return result;
    }
  }
};

// Do not edit below this line
module.exports = sumAll;
