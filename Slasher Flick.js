// Slasher Flick
// Return the remaining elements of an array after chopping off n elements from the head.

// The head meaning the beginning of the array, or the zeroth index

function slasher(arr, num) {
  return arr.slice(num);
}

slasher([1, 2, 3], 2); //3
