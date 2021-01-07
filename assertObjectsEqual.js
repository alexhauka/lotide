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


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  let objKeys1 = Object.keys(object1);
  let objKeys2 = Object.keys(object2);
  if (objKeys1.length !== objKeys2.length) {
    return false;
  }
  for (let key of objKeys1) {
    if (!objKeys2.includes(key)) {
      return false;
    }
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      eqArrays(object1[key], object2[key]);
    }
    if (object1[key] !== object2[key] || object1[key].length !== object2[key].length) {
      return false;
    }
  }
  return true;
};

const assertObjectsEquals = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const obj1 = {
  a: 1,
  b: 2
}

const obj2 = {
  a: 1,
  b: 2
}

const obj3 = {
  a: 2,
  b: 1
}

const obj4 = {
  a: 2,
  b: 2
}

const obj5 = {
  a: 1,
  b: 2
}

const obj6 = {
  b: 2,
  a: 1
}


assertObjectsEquals(obj1, obj2);
assertObjectsEquals(obj3, obj4);
assertObjectsEquals(obj5, obj6);