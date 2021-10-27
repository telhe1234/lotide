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
  if (eqArrays(array1, array2) === true) {
    console.log('✅✅✅ Assertion Passed');
  } else {
    console.log('🔴🔴🔴 Assertion Failed');
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);