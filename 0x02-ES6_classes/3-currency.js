export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(x) {
    if (typeof x !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._code = x;
  }

  set name(x) {
    if (typeof x !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = x;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
