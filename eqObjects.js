const eqArrays = require('./eqArrays');
// const assertEqual = require('./assertEqual');




const eqObjects = function(object1, object2) {
  let objKeys1 = Object.keys(object1);
  let objKeys2 = Object.keys(object2);
  if (objKeys1.length !== objKeys2.length) {
    return false;
  }
  if (Array.isArray(object1) && Array.isArray(object2)) {
    let isEqual = eqArrays(object1, object2);
    if (!isEqual) {
      return false;
    }
  }
  for (let key of objKeys1) {
    // console.log(typeof object1[key])
    if (!objKeys2.includes(key)) {
      return false;
    }
    if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      let isEqual = eqObjects(object1[key], object2[key]); 
      if (!isEqual) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
// assertEqual(eqObjects({ a: 4 , b: 2, c: { z: 1 }}, { a: 4 , b: 2, c: { z: 1 }}), true); // => true
// assertEqual(eqObjects({ a: { b: 4 }, c: 1 }, { a: { b: 5 }, c: 1 }), false); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false

// ----------ORIGINAL CHECKS ---------------
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

module.exports = eqObjects;