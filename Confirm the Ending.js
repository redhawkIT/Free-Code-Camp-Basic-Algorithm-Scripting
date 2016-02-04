// Confirm the Ending
// Check if a string (first argument) ends with the given target string (second argument).
// "Never give up and good luck will find you."
// -- Falcor

function end(str, target) {
  return str.substr(-target.length) === target;
}

end("He has to give me a new name", "name"); //should return true.
end("He has to give me a new name", "me"); //should return true.
