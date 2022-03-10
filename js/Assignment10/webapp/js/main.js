import {Person} from "./model/Person.js";
import {Employee} from "./model/Employee.js"

const person = [
    new Person("Ana Smith", new Date("December 15, 1998")),
    new Person("Bob Jone", new Date("November 16, 1945")),
    new Person("Carlos Slim Helu", new Date("September 24, 1976"))
];

person.forEach(p => console.log(p.toString()));

const emp =  new Employee("Jim Hanson", new Date("November 14, 1998"), 245990.00, new Date("March 14, 2018"));
emp.doJob("Software Engineer");