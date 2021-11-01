const eqArrays = require('./eqArrays');


// This function assertArraysEqual takes in two arrays and console.log(s) an appropriate message to the console
const assertArraysEqual = function (actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  const resultOfEqArrays = eqArrays(actual, expected);
  if (resultOfEqArrays === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


module.exports = assertArraysEqual;