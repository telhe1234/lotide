
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
const assertArraysEqual = function (array1, array2) {
  const resultOfEqArrays = eqArrays(array1, array2);
  if (resultOfEqArrays === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${array1} !== ${array2}`);
  }
};

// MAIN FUNCTION

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}



const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const result2 = map(words, word => word.toUpperCase());
console.log(result2);
assertArraysEqual(result2, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);


const nums = [1, 2, 3, 4];

const result3 = map(nums, num => num * 2);
console.log(result3);
assertArraysEqual(result3, [2, 4, 6, 8]);

