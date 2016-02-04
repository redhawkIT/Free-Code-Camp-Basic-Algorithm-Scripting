// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.
//
// Remember, you can iterate through an array with a simple for loop,
// and access each member with array syntax arr[i] .

function largestOfFour(arr) {
  var sortedArr = [];
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i].sort(function(a, b) {
      return a - b;
    });
    sortedArr.push(temp[temp.length - 1]);
  }
  return sortedArr;
}

function largestOfFour(arr) {
  return arr.map(function(e, i) {
    return e.sort(function(a, b) {
      return a - b;
    })[e.length - 1];
  });
}


largestOfFour([
  [13, 27, 18, 26],
  [4, 5, 1, 3],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]); // [27,5,39,1001]
