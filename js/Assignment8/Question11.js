
const Employee = ( function() {

    let name;
    let age ;
    let salary;

    const setAge = function(newAge) {
        age = newAge;
    };

    const setSalary = function(newSalary) {
        salary = newSalary;
    };

    const setName = function(newName) {
        name = newName;
    };

    const getAge = function() {
        return age;
    };
    
    const getName = function() {
        return name;
    };
    const getSalary = function() {
        return salary;
    };

    const increaseSalary = function(percentage) {
        return getSalary() + getSalary() * percentage/100;
    };
    const incrementAge = function(age) {
       age =  getAge() + 1; 
    };

    return {
        setAge : setAge,
        setName : setName,
        setSalary : setSalary,
        increaseSalary : increaseSalary,
        incrementAge : incrementAge
    };

})();

Employee.address ="";
Employee.setAddress = function(add) {
    address = add;
};
Employee.getAddress = function() {
    return address;
};