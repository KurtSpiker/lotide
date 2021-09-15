const findKeyByValue = function(someObject, someValue) {
  let keys = Object.keys(someObject)
  let keyCheck = 0;
  for (const key of keys) {
    if (someObject[key] === someValue) {
      keyCheck ++;
      return key;
    }
  }
  if (keyCheck === 0) {
    return undefined;
  }
}
