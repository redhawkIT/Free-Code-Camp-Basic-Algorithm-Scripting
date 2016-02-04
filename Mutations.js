// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien"
function mutation(arr) {

  var string1 = arr[0].toLowerCase();
  var string2 = arr[1].toLowerCase();
  'abc'.indexOf('d'); // returns -1 if not found

  // Length of 2nd word is important as we are itterating through its letters
  // Checking every index of arr[0] for the occurrences of arr[1][i]
  for (var i = 0; i < string2.length; i++) {
    if (string1.indexOf(string2[i]) == -1) {
      // returns -1 if value is not contained in string1
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]); // false
mutation(["Alien", "line"]) // should return true.
mutation(["floor", "for"]) // should return true.
