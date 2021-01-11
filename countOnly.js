// const assertEqual = require('./assertEqual');


const countOnly = function(allItems, itemToCount) {
  let results = {};
  
  for (const name of allItems) {
    if (itemToCount[name] === true) {
      if (results[name]) {
        results[name] += 1;
      } else {
        results[name] = 1;
      }
    }
  }
  return results;
}



// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];


// // countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })
// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
module.exports = countOnly;