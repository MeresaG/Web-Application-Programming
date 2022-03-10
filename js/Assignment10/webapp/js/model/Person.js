export class Person {

    constructor(name, dateOfBirth) {
        this._name = name;
        this._dateOfBirth = dateOfBirth;
    }

    getName() {
        return this._name;
    }

    getDateOfBirth() {
        return this._dateOfBirth;
    }

    setName(value) {
        this._name = value;
    }

    setDateOfBirth(value) {
        this._dateOfBirth = value;
    }

    toString() {
        return `{Name: ${this._name}, DateOfBirth: ${this._dateOfBirth.getFullYear()}-${this._dateOfBirth.getMonth() + 1}-${this._dateOfBirth.getDate()}}`;
    }

}
