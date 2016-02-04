// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number.


function findLongestWord(str) {
  var words = str.split(' ');

  var longestWord = words[0].length;
  for (var i = 0; i < words.length; i++) {
    if (longestWord < words[i].length) {
      longestWord = words[i].length;
    }
  }
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog"); //6
