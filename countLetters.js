const countLetters = function(someString) {
  let countedLetters = {}
  for (const letter of someString) {
    if (typeof countedLetters[letter] === "number") {
      countedLetters[letter] ++;
    } else {
      countedLetters[letter] = 1;
    }
  }
  return countedLetters;
}