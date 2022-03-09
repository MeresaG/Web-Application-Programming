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

const john = Object.create(Person);
john.setName("John");
john.dateOfBirth = new Date('December 10, 1998');

console.log("The person’s name is "  + john.getName());
console.log(john.getName() +" was born on " +john.dateOfBirth.getFullYear() + "-" + (john.dateOfBirth.getMonth() + 1 )+ "-" + john.dateOfBirth.getDate());