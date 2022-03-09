var count = {

    counter : 0,
    add : function() {
        return this.counter += 1;
    },

    reset : function() {
        this.counter = 0;
    }

};

count.add();
console.log(count.add());
count.reset();
console.log(count.add());
