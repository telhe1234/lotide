// This function returns an array with every element except the head (first element) of the array
const tail = function(arr) {
  let tail = arr.slice(1);
  return tail;
};


module.exports = tail;
