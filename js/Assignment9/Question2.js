let Person = {

    name : "",
    dateOfBirth:null,

    getName: function() {
        return this.name;
    },

    setName: function(name) {
        this.name = name;
    }

};

let Employee = {
    salary : 0,
    hireDate : new Date(),
     __proto__ : Person,

    doJob : function(jobTitle) {
        return this.getName() + " is a " + jobTitle + " who earns $" + this.salary;        
    }
    
};

const Anna = Object.create(Employee);
Anna.setName("Anna");
Anna.salary = 249995.50;
console.log(Anna.doJob("Programmer")); 




const john = Object.create(Person);