const takeUntil = function(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      newArray = array.slice(0, [i]);
      return newArray;
    }
  } 
}
