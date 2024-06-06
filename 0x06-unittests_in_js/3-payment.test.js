// module contains a test for the sendPaymentRequestToApi
// function in the 3-payment.js module.

const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('calls the Utils.calculateNUmber function with the right args', function () {
    const calcspy = sinon.spy(Utils, "calculateNumber");
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(calcspy, 'SUM', 100, 20);
    calcspy.restore();
  });
});
