const removeFromArray = function (array, ...args) {
  argsArray = [...args];
  return array.filter((item) => !argsArray.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
