const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION

// We need to create an object variable we can call it charactersCount and initialize it to an emty object literal {}

// We need to loop over the sentence string literal argument using for..of to iterate over the characters one at a time

// Inside the for..of loop we need first to check if the charactersCount already contains a key-value pair with the key being the current character from the current iteration
// if yes we increase the value of the current character key by 1 if not we create a key-value pair with the key being the current character and we initialise its value to 1

// Outside the for loop we need to return the charactersCount object

// Edge Case: if the charcter of the current iteration is a whitespace we shouldn't to add it to the charactersCount object


const countLetters = function (sentence) {
  const charactersCount = {};
  for (const char of sentence) {
    if (char !== ' ') {
      if (charactersCount[char]) {
        charactersCount[char] += 1;
      } else {
        charactersCount[char] = 1;
      }
    }
  }
  return charactersCount;
}


// TEST CODE

console.log(countLetters("lighthouse in the house"));
console.log(countLetters('LHL'));
console.log(countLetters(' Hello my name is Taha '));