const caesar = function (message, shiftNum) {
  let result = '';
  let asciiNum;

  if (shiftNum > 26) {
    shiftNum %= 26;
  }

  for (let i = 0; i < message.length; i++) {
    asciiNum = message[i].charCodeAt();

    if (asciiNum >= 65 && asciiNum <= 90) {
      charToConvert = asciiNum + shiftNum;
      if (charToConvert > 90) {
        charToConvert = charToConvert - 90 + 64;
      }
      if (charToConvert < 65) {
        charToConvert = charToConvert - 64 + 90;
      }
    }

    if (asciiNum >= 97 && asciiNum <= 122) {
      charToConvert = asciiNum + shiftNum;
      if (charToConvert > 122) {
        charToConvert = charToConvert - 122 + 96;
      }
      if (charToConvert < 97) {
        charToConvert = charToConvert - 96 + 122;
      }
    }

    if (asciiNum < 65 || asciiNum > 122 || (asciiNum > 90 && asciiNum < 97)) {
      charToConvert = asciiNum;
    }

    result += String.fromCharCode(charToConvert);
  }
  return result;
};

caesar('Mjqqt, Btwqi!', -5);

// Do not edit below this line
module.exports = caesar;
