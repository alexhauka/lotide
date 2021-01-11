const countOnly = require("./countOnly");

const countLetters = function(sentance) {
  let finalCount = {};
  for (let letter of sentance) {
    if (letter !== " ") {
      if (finalCount[letter]) {
        finalCount[letter] += 1;
      } else {
        finalCount[letter] = 1;
      }
    }
  }
  return finalCount;
};

// console.log(countLetters('lighthouse labs'));

module.exports = countLetters;