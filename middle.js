const middle = function(someArray) {
  let middleArray = [];
  if (someArray.length % 2 === 1) {
    middleArray.push(someArray[(someArray.length / 2) - 0.5]);
    return middleArray;
  } else {
    middleArray.push(someArray[(someArray.length / 2 ) -1 ]);
    middleArray.push(someArray[(someArray.length / 2 )]);
    return middleArray;
  }
}

module.exports = middle;