// Seek and Destroy
// Remove all elements from the initial array
// that are of the same value as these arguments.

// Method 1
function destroyer(arr) {

  var toRemove = [];
  for (var i = 1; i < arguments.length; i++) {
    toRemove.push(arguments[i]);
  }
  console.log("toRemove", toRemove);

  return arr.filter(function(element, index) {
    return toRemove.indexOf(element) === -1;
  });
  // indexOf returns -1 if item is not found
  // filter returns an array of values that are true
  // For every element in array find the index of the element value
  // in the array toRemove. Returns all elements which toRemove dosent contain
}
// Method 2
function destroyer(arr) {

  var args = Array.prototype.slice.call(arguments);

  // return array with 1st element removed
  args = args.slice(1, arguments.length);

  // for each element in arr check if remove is true
  var myArr = arr.filter(remove);

  function remove(element, index) {
    // return true if element is not in args array
    return args.indexOf(element) === -1;
  }

  return myArr;
}
// Method 3
function destroyer(arr) {

  var mustRemove = [];
  for (var i = 1; i < arguments.length; i++) {
    // arguments object to take additional arguments into account (2,3)
    mustRemove.push(arguments[i]);
  }
  //array that will eventually contain differing values
  var destroyer = [];

  //looping through arr because we're checking this array for values belonging to the MR Array
  for (i = 0; i < arr.length; i++) {
    //conditional statement to push unequal values into  the destroyer  array
    if (mustRemove.indexOf(arr[i]) === -1) {
      destroyer.push(arr[i]);
    }
  }

  return destroyer;


}﻿
//destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // should return [1, 5, 1].
