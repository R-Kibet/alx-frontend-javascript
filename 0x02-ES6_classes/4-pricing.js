import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amnt() {
    return this._amount;
  }

  get curr() {
    return this._currency;
  }

  set amnt(x) {
    this._amount = x;
  }

  set curr(x) {
    if (!(x instanceof Currency)) {
      throw new TypeError('Currency must be an instance of class Currency');
    }
    this._currency = x;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
