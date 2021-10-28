const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUALL FUNCTION

// The function should report back how many instances of each string were found in the allItems array of strings.
// only keys which have a truthy value should be counted in the resulting object.

// It will need to return an object that can represent the stats.


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// const countOnly = function(allItems, itemsToCount) {
//   const results = {};
//   for (let key in itemsToCount) {
//     let count = 0;
//     let nameToAdd = '';
//     let boolVal = itemsToCount[key];
//     if (boolVal === true) {
//       for(let name of allItems) {
//         if (name === key) {
//           count++;
//           nameToAdd = name;
//         }
//       }
//       if(count !== 0) {
//         results[nameToAdd] = count;
//       }
//     }
//   }
//   return results;
// };

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if(itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
}


// TEST CODE

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
