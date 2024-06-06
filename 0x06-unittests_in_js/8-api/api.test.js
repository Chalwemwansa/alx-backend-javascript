// module contains tests for the api routes using the request module

const request = require('request');

describe('API routes test', function () {
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
