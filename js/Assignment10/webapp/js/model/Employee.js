import {Person} from "../model/Person.js";

export class Employee extends Person {

    constructor(name, DoB, salary, hireDate) {
        super(name, DoB);
        this.salary = salary;
        this.hireDate = hireDate;
    }

    doJob(jobTitle) {
        console.log(`${this.getName()} is a ${jobTitle} who earns $${this.salary}`);
    }

}