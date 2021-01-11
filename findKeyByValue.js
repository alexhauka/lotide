// const assertEqual = require('./assertEqual');


const findKeyByValue = function(searchObject, searchValue) {
  let arrayOfKeys = Object.keys(searchObject);
  for (let key of arrayOfKeys) {
    if (searchObject[key] === searchValue) {
      return key;
    }
  }
};

// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire",
//   romance: "The Bachelor"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;