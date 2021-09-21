const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns [86] for [5, 86, 245]", () => {
    assert.deepEqual(middle([5, 86, 245]), [86]); 
  });
});