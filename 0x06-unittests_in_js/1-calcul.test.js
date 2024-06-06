// module contains tests for the calculateNumber function in the 1-calcul
// module in the current directory

const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('Math functions', function () {
  describe('#calculateNumber', function () {
    it('returns 6 for SUM 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('returns -4 for SUBTRACT 1.4  and 4.5', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('returns 0.2 for DIVIDE 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('returns Error for DIVIDE 1.4 by 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
