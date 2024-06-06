// module contains tests for the getPaymentTokenFromAPI function
const getPaymentTokenFromAPI = require('./6-payment_token');


describe('getPaymentTokenFromAPI', function () {
	let expect;
  before(async function () {
    const chai = await import('chai');
    expect = chai.expect;
  });

  it("returns {data: 'Successful response from the API' } when true is passed in", function (done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch(err => {
        done(err);
      });
  });
});
