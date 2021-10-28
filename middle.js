// This function eqArrays compares two arrays for a perfect match.
// But it doesn't compare nested arrays or arrays of objects.
const eqArrays = function (array1, array2) {
  let isEqual = false;
  if (array1.length === 0 && array2.length === 0) {
    isEqual = true;
    return isEqual;
  }
  if(array1.length !== array2.length) {
    return false;
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

// ACTUAL FUNCTION
const middle = function(array) {
  let arrCopy = array;
  const arrLength = array.length;
  let middleMostElementArr = [];
  if (arrLength === 1 || arrLength === 2) {
    return [];
  } else if (arrLength % 2 === 0) {
    const indexOfFirstMiddleItem = Math.floor((arrLength - 1) / 2);
    for (let i = 0; i < arrLength; i++) {
      if (i === indexOfFirstMiddleItem) {
        middleMostElementArr.push(arrCopy[i]);
        middleMostElementArr.push(arrCopy[i + 1]);
      }
    }
    return middleMostElementArr;
  } else {
    const indexOftMiddleItem = Math.floor(arrLength / 2);
    middleMostElementArr.push(arrCopy[indexOftMiddleItem]);
    return middleMostElementArr;
  }
}

// TEST CODE

// middle([1]) // => []
// middle([1, 2]) // => []

// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]

// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);


assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);