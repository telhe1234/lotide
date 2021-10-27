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
}

// This function assertArraysEqual takes in two arrays and console.log(s) an appropriate message to the console
const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log('✅✅✅ Assertion Passed');
  } else {
    console.log('🔴🔴🔴 Assertion Failed');
  }
};


const without = function (source, itemsToRemove) {
  if (source.length !== 0) {
    let sourceCopy = source;
    for (let item of itemsToRemove) {
      for (let i = 0; i < sourceCopy.length; i++) {
        if (item === sourceCopy[i]) {
          sourceCopy.splice(i, 1);
        }
      }
    }
    return sourceCopy;
  }
  return [];
};

console.log(without([], [1, 2, 3]));

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);

assertArraysEqual(without([], [1, 2, 3]), []);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
