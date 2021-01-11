const middle = function(array) {
  let midArray = [];
  let midPoint = Math.floor(array.length / 2)
  if (array.length > 2) {
    // console.log('TEST: array contains more than 2 elements')
    if (array.length % 2 === 0) {
      // console.log('TEST: array is divisible by 2 [' + array + ']')
      midArray.push(array[midPoint-1], array[midPoint])
    } else {
      // console.log('TEST: array is not divisible by 2 [' + array + ']')
      midArray.push(array[midPoint]);

    }
  }
  return midArray;
}


module.exports = middle;
