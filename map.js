const words = ["ground", "control", "to", "major", "tom"];
const numbers = [10, 20, 30, 40, 50]

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


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const map = function(arrayToMap, callBack) {
  const results = [];
  for (let item of arrayToMap) {
    results.push(callBack(item));
  }
  return results;
}



const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(numbers, number => number * 10);
console.log(results2);

const results3 = map(words, word => word.length);
console.log(results3);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 100, 200, 300, 400, 500 ]);
assertArraysEqual(results3, [ 6, 7, 2, 5, 3 ]);