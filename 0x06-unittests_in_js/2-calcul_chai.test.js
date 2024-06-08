// module contains tests for the calculateNumber function in the 1-calcul
// module in the current directory

const calculateNumber = require('./1-calcul');
const { expect } = require('chai');

describe('Math functions', function () {
  describe('#SUM', function () {
    it('returns 6 for SUM 1.4 and 4.5', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });
  describe('#SUBTRACT', function () {
    it('returns -4 for SUBTRACT 1.4  and 4.5', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });
  describe('#DIVIDE', function () {
    it('returns 0.2 for DIVIDE 1.4 and 4.5', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
  });
  describe('#DIVIDE', function () {
    it('returns Error for DIVIDE 1.4 by 0', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
