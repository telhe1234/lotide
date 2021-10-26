// This function assertEqual writes an error message to the console if the assertion is false.
// If the assertion is true, it returns an Assertion Passed message
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let tail = arr.slice(1);
  return tail;
};


// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);// ensure we get back two elements
assertEqual(result[0], "Lighthouse");// ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");// ensure second element is "Labs"
console.log('**********');

// Test Case 2: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);// no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
console.log('**********');

// Test Case 3: Check if tail function returns an empty array when we pass an empty array to it
const array1 = [];
const result1 = tail(array1);
assertEqual(result1.length , 0);
console.log('**********');

// Test Case 4: Check if array with only one element should yield an empty array for its tail
// console.log(tail([1]));
const array2 = [1];
const result2 = tail(array2);
assertEqual(result2.length , 0);
