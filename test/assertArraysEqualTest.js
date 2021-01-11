const assertArraysEqual = require("../assertArraysEqual");
// const eqArrays = require("../eqArrays");

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([], []);
assertArraysEqual([1, 2, 3], ["1", 2, 3]);
assertArraysEqual([3, 2, 1], [1, 2, 3]);