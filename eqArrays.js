const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    // console.log(`${array1}'s length doesn't match ${array2}`)
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i])) {
      const isEqual = eqArrays(array1[i], array2[i]);
      if (!isEqual) {
        // console.log(`${array1[i]} does not equal ${array2[i]}`)
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      // console.log(`hi`)
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;