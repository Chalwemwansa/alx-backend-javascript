export default class Building {
  _sqft;
  constructor(sqft) {
    const check = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
    if (check.includes('evacuationWarningMessage')) {
      this._sqft = sqft;
    } else {
        throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
  // geter
  get sqft() {
    return this._sqft;
  }
  //setter
  set sqft(sqft) {
    this._sqft = sqft;
  }
  // abstract method
  evacuationWarningMessage() {
    throw new Error('must be overriden');
  }
}