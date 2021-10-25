// This function assertEqual writes an error message to the console if the assertion is false. 
// If the assertion is true, it returns an Assertion Passed message
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// This function head returns the first element of an array
const head = function(arr) {
  return arr[0];
}

// console.log(head([5, 6, 7]));
// console.log(head([5]));
// console.log(head([]));
assertEqual(head([5,6,7]), 5);
assertEqual(head([5]), 5);
assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");