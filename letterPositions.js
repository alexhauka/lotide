const letterPositions = function(sentance) {
  const results = {};
  for (let i = 0; i < sentance.length; i++) {
    const char = sentance[i];
    if (sentance[i] !== " ") {
      if (results[char]) {
        results[char].push(sentance.indexOf(char, i))
      } else {
        results[char] = [sentance.indexOf(char)]
      }
    }
  }
  return results;
};

module.exports = letterPositions;