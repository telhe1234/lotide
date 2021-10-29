
// This function eqArrays compares two arrays for a perfect match.
// But it doesn't compare nested arrays or arrays of objects.
const eqArrays = function (array1, array2) {
  let isEqual = false;
  if (array1.length === 0 && array2.length === 0) {
    isEqual = true;
    return isEqual;
  }
  for (let i = 0; i < array1.length; i++) {
    array1[i] === array2[i] ? isEqual = true : isEqual = false;
  }
  return isEqual;
};

// This function assertArraysEqual takes in two arrays and console.log(s) an appropriate message to the console
const assertArraysEqual = function (actual, expected) {
  const resultOfEqArrays = eqArrays(actual, expected);
  if (resultOfEqArrays === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};



// MAIN FUNCTION

// Pseudocode

// The function will return a "slice of the array with elements taken from the beginning."
// We need a for loop to iterate over the items in the passed array one item at a time
// We need a results array to store the item that we need to include(that doesn't satisfy the condition in the callback function)

// It should keep going until the callback/predicate returns a truthy value.

// the callback should only be provided one value: The item in the array.


const takeUntil = function(array, callback) {
  let results = [];
  for(let item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
  return results;

}





// TEST CODE

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

const data3 = [2, 3, 5, 10, 2, 11, 20, 4, 5];
const results3 = takeUntil(data3, x => x > 10);
console.log(results3);
assertArraysEqual(results3, [2, 3, 5, 10, 2]);