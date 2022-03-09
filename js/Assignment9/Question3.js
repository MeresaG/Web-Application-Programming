function Person(name) {
    this.name = name;
    this.dateOfBirth = null;

}

const Peter = new Person("Peter");
Peter.dateOfBirth = new Date("November 10, 1985");


Person.prototype.toString = function() {
    return "[Name : " + Peter.name + ", DateOfBirth: " + Peter.dateOfBirth.getFullYear() + "-"+ (Peter.dateOfBirth.getMonth() + 1) +"-"+Peter.dateOfBirth.getDate()+ "]";
}

const toString = Peter.toString();
console.log(toString);