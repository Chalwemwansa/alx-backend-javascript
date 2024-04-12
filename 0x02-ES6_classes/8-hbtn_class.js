export default class HolbertonClass {
  _size;
  _location;
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }
  // method that returns the size when class is cast into a number
  valueOf() {
    return this._size;
  }
  // method that returns the location when class is cast into a string
  toString() {
    return this._location;
  }
}
