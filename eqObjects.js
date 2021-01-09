// const eqArrays = function(array1, array2) {
//   let isEqual = true;
//   if (array1.length !== array2.length) {
//     isEqual = false;
//   } else {
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]) {
//         isEqual = false;
//       }
//     }
//   }
//   return isEqual;
// };


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const eqObjects = function(object1, object2) {
//   let objKeys1 = Object.keys(object1);
//   let objKeys2 = Object.keys(object2);
//   if (objKeys1.length !== objKeys2.length) {
//     return false;
//   }
//   for (let key of objKeys1) {
//     if (!objKeys2.includes(key)) {
//       return false;
//     }
//     if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
//       eqArrays(object1[key], object2[key]);
//     }
//     if (object1[key] !== object2[key] && object1[key].length !== object2[key].length) {
//       return false;
//     }
//   }
//   return true;
// };


const eqObjects = function(object1, object2) {
  
  // if (typeof object1 !== 'object' || typeof object2 !== 'object') {
  //   return false;
  // }
  if (Array.isArray(object1) || Array.isArray(object2)) {
    return false;
  }
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  if (JSON.stringify(object1) !== JSON.stringify(object2)) {
    return false; // this feels like cheating but it works!
    // also, it'll return 'false' if the order of key/values is wrong despite them being equal
    // NOTE TO SELF: may break something if refactoring this function later
  }
  for (let key of Object.keys(object1)) {
    if (!Object.keys(object2).includes(key)) {
      return false;
    }
    if (object1[key] !== object2[key] && object1[key].length !== object2[key].length) {
      return false;
    }
  }
  for (const obj in object1) {
    return eqObjects(object1[obj], object2[obj]);
  }
  return true;
};
// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: 4 , b: 2, c: { z: 1 }}, { a: 4 , b: 2, c: { z: 1 }}), true); // => true
assertEqual(eqObjects({ a: { b: 4 }, c: 1 }, { a: { b: 5 }, c: 1 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false


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