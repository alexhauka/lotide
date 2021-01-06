const eqArrays = function(array1, array2) {
  let isEqual = true;
  if (array1.length !== array2.length) {
    isEqual = false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        isEqual = false;
      }
    }
  }
  return isEqual;
};


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};


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
}


assertArraysEqual(letterPositions("hello").e, [1]);