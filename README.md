# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @alexhauka/lotide`

**Require it:**

`const _ = require('@alexhauka/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(...)`: description
* `function2(...)`: description
* `function3(...)`: description

`assertArraysEqual` : logs assertion of array comparison
`assertEqual` : logs assertion of comparison
`assertObjectsEqual` : logs assertion of object comparison
`countLetters` : returns object with properties comprised of unique letters found (excluding whitespace) and letter count
`countOnly` : takes an array and an object; scans array, using object for comparison; returns new object
`eqArrays` : returns boolean after comparing arrays
`eqObjects` : returns boolean after comparing objects
`findKey` : takes an object and a callback; returns object property if matching callback
`findKeyByValue` : takes an object and value; returns object's key matching value (if any)
`flatten` : takes nested arrays and flattens them to a single array
`head` : returns first index value of array
`letterPositions` : returns an object with properties comprised of unique letters found and their indexes
`map` : takes an array and a callback; performs callback on array before returning new array
`middle` : returns middle index value of array (returns two index's values if array length is even)
`tail` : removes first index of array (without destroying original); returns new array
`takeUntil` : takes an array and callback; returns new array up to (but not including) callback
`without` : takes an array, and an array of values to exclude; returns new array (without exclusions)