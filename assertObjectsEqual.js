
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



// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  let isEqual = false;
  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])){
      isEqual = eqArrays(object1[key], object2[key]);
      if(isEqual === false) return false;
    }
    else {
      if(object1[key] === object2[key]) {
        isEqual = true;
      } else {
        return false;
      };
    }
  }
  return isEqual;

};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  const resultOfEqObjects = eqObjects(actual, expected);
  if (resultOfEqObjects === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false