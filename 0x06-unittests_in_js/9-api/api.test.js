// module contains tests for the api routes using the request module

const request = require('request');

describe('/ routes test', function () {
  let expect;
  before(async function () {
    const chai = await import('chai');
    expect = chai.expect;
  });
  it('testing the / route', function (done) {
    request('http://localhost:7865/', function (error, response, body) {
      if (error) {
        done(error);
      }
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('/cart/:id route test', function () {
  let expect;
  before(async function () {
    const chai = await import('chai');
    expect = chai.expect;
  });
  it('testing the /cart/:id route', function (done) {
    request('http://localhost:7865/cart/12', function (error, response, body) {
      if (error) {
        done(error);
      }
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });
  it('testing the /cart/:id route with a word', function (done) {
    request('http://localhost:7865/cart/hello', function (error, response, body) {
      if (error) {
        done(error);
      }
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
