// Falsy Bouncer
// Remove all falsy values from an array.

// a truthy value is a value that translates to true when evaluated in a
// Boolean context. All values are truthy unless they are defined as falsy
// (i.e., except for false, 0, "", null, undefined, and NaN).

// Method 1
function bouncer(arr) {
  return arr.filter(function(element, index, array) {
    return element;
  });
}

// Method 2
function bouncer(arr) {
    return arr.filter(boolValue);

    // callback function
    function boolValue(element, index, array) {
        console.log(element, index, array);
        return Boolean(element);
    }
}

bouncer([7, "ate", "", false, 9]); // should return [7, "ate", 9].
bouncer([false, null, 0, NaN, undefined, ""]); // should return [].
