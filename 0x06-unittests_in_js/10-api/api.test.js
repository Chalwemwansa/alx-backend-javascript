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

describe('/available_payments route test', function () {
  let expect;
  before(async function () {
    const chai = await import('chai');
    expect = chai.expect;
  });
  it('testing the /available_payments route', function (done) {
    request('http://localhost:7865/available_payments', function (error, response, body) {
      if (error) {
        done(error);
      }
      const responseBody = JSON.parse(body);
      expect(response.statusCode).to.equal(200);
			expect(responseBody).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
      done();
    });
  });
});

describe('/login route test', function () {
  let expect;
  before(async function () {
    const chai = await import('chai');
    expect = chai.expect;
  });
  it('testing the /login route', function (done) {
    request.post({
  		url: 'http://localhost:7865/login',
  		json: true,
  		body: { "userName": "Betty" }
			}, function (error, response, body) {
      if (error) {
        done(error);
      }
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
