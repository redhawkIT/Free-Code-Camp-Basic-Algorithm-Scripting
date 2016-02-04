// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
function titleCase(str) {
  var words = str.toLowerCase().split(' '); // [ 'i\'m', 'a', 'little', 'tea', 'pot' ]

  var sentence = [];
  for (var i = 0; i < words.length; i++) {
    var letters = words[i].split('');
    letters[0] = words[i].split('')[0].toUpperCase();
    sentence.push(letters.join(''));
  }
  return sentence.join(' ');
}

function titleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function titleCase(str) {
  return str.toLowerCase().split(" ").map(function(i) {
    return i[0].toUpperCase() + i.substring(1);
  }).join(" ");
}

titleCase("I'm a little tea pot"); // should return "I'm A Little Tea Pot".
