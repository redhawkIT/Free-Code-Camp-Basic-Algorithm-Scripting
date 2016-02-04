// Chunky Monkey
// Write a function that splits an array (first argument) into groups the
// length of size (second argument) and returns them as a two-dimensional array.

function chunk(arr, size) {
  var temp = [];

  for (var i = 0; i < arr.length; i) {
    temp.push(arr.slice(i, i += size));
  }
  return temp;
}

function chunk(arr, size) {
  var temp = [],
    i = 0;

  while (i < arr.length) {
    temp.push(arr.slice(i, i += size));
  }
  return temp;
}

chunk([0, 1, 2, 3, 4, 5], 3); // should return [[0, 1, 2], [3, 4, 5]].
chunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); //should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
