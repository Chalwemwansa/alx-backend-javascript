// module contains a test for the sendPaymentRequestToApi
// function in the 3-payment.js module.

const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  it('calls the Utils.calculateNUmber function with the right args\
      and checks if the console.log is also being called with the correct args\
      by stubbing the return from the math func with 10', function () {
    const calcspy = sinon.stub(Utils, "calculateNumber").returns(10);
    const consolespy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(calcspy, 'SUM', 100, 20);
    sinon.assert.calledWith(consolespy, 'The total is: 10');
    calcspy.restore();
    consolespy.restore();
  });
});
