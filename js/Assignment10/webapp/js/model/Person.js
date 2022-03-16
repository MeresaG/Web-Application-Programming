/*
 * @author Meresa G
 * @since 2022-3-9
*/

export class Person {

    #name = "";
    #dateOfBirth = null;

    constructor(name, dateOfBirth) {
        this.#name = name;
        this.#dateOfBirth = dateOfBirth;
    }

    getName() {
        return this.#name;
    }

    getDateOfBirth() {
        return this.#dateOfBirth;
    }

    setName(value) {
        this.#name = value;
    }

    setDateOfBirth(value) {
        this.#dateOfBirth = value;
    }

    toString() {
        return `{Name: ${this.#name}, DateOfBirth: ${this.#dateOfBirth.getFullYear()}-${this.#dateOfBirth.getMonth() + 1}-${this.#dateOfBirth.getDate()}}`;
    }

}
