const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (typeof results[sentence[i]] === "object") {
      results[sentence[i]].push(i)
    } else {
      results[sentence[i]] = [i]
    }
  }
  return results;
};
