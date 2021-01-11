// const eqArrays = require('./eqArrays');

const flatten = function(arrayToFlatten) {
  let flatArray = [];
  for (let i = 0; i < arrayToFlatten.length; i++) {
    if (Array.isArray(arrayToFlatten[i])) {
      for (let item of arrayToFlatten[i]) {
        flatArray.push(item)
      }
    } else {
      flatArray.push(arrayToFlatten[i])
    }
  }
  return flatArray
}

// flatten([1, 2, [3, 4], 5, [6]])

module.exports = flatten;