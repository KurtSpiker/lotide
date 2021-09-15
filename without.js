const without = function(array, removeableItems) {
  let tempArray = [];
  for (let i=0; i < array.length; i++) {
    if (!removeableItems.includes(array[i])) {  
      tempArray.push(array[i])
    }
  }
  return tempArray;
}
