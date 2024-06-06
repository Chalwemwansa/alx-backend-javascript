// module contains a test for the calculateNumber function
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Math functions', function () {
  describe('#calculateNumber', function () {
    it('should return 4 for 1 and 3', function () {
      assert.strictEqual(calculateNumber(1, 3), 4);
    });
    it('should return 5 for 1 and 3.7', function () {
      assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
    it('should return 5 for 1.2 and 3.7', function () {
      assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
    it('should return 6 for 1.5 and 3.7', function () {
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
    it('should return -5 for -1.5 and -3.7', function () {
      assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
    });
  });
});
