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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
}