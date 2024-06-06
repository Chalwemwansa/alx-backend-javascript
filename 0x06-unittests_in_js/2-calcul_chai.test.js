// module contains tests for the calculateNumber function in the 1-calcul
// module in the current directory

const calculateNumber = require('./1-calcul');

describe('Math functions', function () {
  let expect;
  before(async function () {
    const chai = await import('chai');
    expect = chai.expect;
  });

  describe('#calculateNumber', function () {
    it('returns 6 for SUM 1.4 and 4.5', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    }); 
    it('returns -4 for SUBTRACT 1.4  and 4.5', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    }); 
    it('returns 0.2 for DIVIDE 1.4 and 4.5', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    }); 
    it('returns Error for DIVIDE 1.4 by 0', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});