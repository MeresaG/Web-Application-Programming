var count = {

    counter : 0,
    add : function() {
        return this.counter += 1;
    },

    reset : function() {
        this.counter = 0;
    }
}

function make_adder(inc) {
    return this.counter + inc;
}

var add5 = make_adder.bind(count, 5);
console.log(add5());
