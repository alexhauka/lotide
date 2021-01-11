const eqObjects = require('./eqObjects');

const assertObjectsEquals = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// const obj1 = {
//   a: 1,
//   b: 2
// }

// const obj2 = {
//   a: 1,
//   b: 2
// }

// const obj3 = {
//   a: 2,
//   b: 1
// }

// const obj4 = {
//   a: 2,
//   b: 2
// }

// const obj5 = {
//   a: 1,
//   b: 2
// }

// const obj6 = {
//   b: 2,
//   a: 1
// }


// assertObjectsEquals(obj1, obj2);
// assertObjectsEquals(obj3, obj4);
// assertObjectsEquals(obj5, obj6);

module.exports = assertObjectsEquals;