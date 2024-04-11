import Currency from './3-currency';

export default class Pricing {
  _amount;
  _currency;
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }
  // amount getter
  get amount() {
    return this._amount;
  }
  // amount setter
  set amount(amount) {
    this._amount = amount;
  }
  // currency getter
  get currency() {
    return this._currency;
  }
  // currency setter
  set currency(currency) {
    this._currency = currency;
  }
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`
  }
  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}