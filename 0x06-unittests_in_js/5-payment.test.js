// module contains code that tests the sendPaymentRequest function
// and checks if it is logging the correct things to the console
// by using hooks
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('testing sendPaymentRequestToApi twice', function () {
  let consolespy;
  beforeEach(function () {
    consolespy = sinon.spy(console, 'log');
  });
  afterEach(function () {
    consolespy.restore();
  });
  it('calls sendPaymentRequestToApi with args 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(consolespy, 'The total is: 120');
    sinon.assert.calledOnce(consolespy);
  });
  it('calls sendPaymentRequestToApi with args 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledWith(consolespy, 'The total is: 20');
    sinon.assert.calledOnce(consolespy);
  });
});
