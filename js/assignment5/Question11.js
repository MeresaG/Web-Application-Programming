function mutiply(numbers) {

    return numbers.reduce((product, current) => product * current, 1);


}

function sum(numbers) {

    return numbers.reduce((s, current) => s + current, 0);


}

console.log(mutiply([1,2,3,4]));
console.log(sum([1,2,3,4]));