function round(value, precision) {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const ftoc = function (fahrenheitDegrees) {
  celsiusDegrees = ((fahrenheitDegrees - 32) * 5) / 9;
  celsiusDegrees = round(celsiusDegrees, 1);
  return celsiusDegrees;
};

const ctof = function (celsiusDegrees) {
  fahrenheitDegrees = (celsiusDegrees * 9) / 5 + 32;
  fahrenheitDegrees = round(fahrenheitDegrees, 1);
  return fahrenheitDegrees;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
