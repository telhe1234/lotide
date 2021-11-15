// This function returns the middle most element of an array in the case of an array with odd length, and it returns the two middle most elements in the case of an array with even length.
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
};

module.exports = middle;
