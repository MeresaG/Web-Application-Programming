
console.log(__dirname, __filename);

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My Name is ${this.name} and I am ${this.age} years old.`);
    }
    
}

module.exports = Person;