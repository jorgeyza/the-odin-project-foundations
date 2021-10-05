const reverseString = function (str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result += str[str.length - 1 - i];
  }

  return result;
};

// Do not edit below this line
module.exports = reverseString;
