const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const keys of Object.keys(object1)) {
    if (object1[keys] === object2[keys]) { 
    } 
    else if (object1[keys].isArray === object2[keys].isArray) {
      if (eqArrays(object1[keys], object2[keys]) === false) {
        return false;
      }
    } 
    else {
      return false;
    }
  }
  return true;
};

const eqArrays = function(array1, array2) {
  let truthCheck = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i] && array1.length === array2.length) {
      truthCheck++;
    }
    else {
      return false;
    }
  }
  if (truthCheck === array1.length) {
    return true;
  }
};
