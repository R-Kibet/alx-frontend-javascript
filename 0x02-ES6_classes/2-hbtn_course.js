export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._len = length;
    this._stud = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._len;
  }

  get studnt() {
    return this._stud;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  set studnt(value) {
    value.forEach((element) => {
      if (typeof element !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    });
    this._students = value;
  }
}
