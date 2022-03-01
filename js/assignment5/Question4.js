function sumNums(numbers) {
    var sum = 0;
    for(let i = 0 ; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;

}

function mulNums(numbers) {
    var product = 1;
    for(let i = 0 ; i < numbers.length; i++) {
        product *= numbers[i];
    }

    return product;

}

console.log(sumNums([1, 2, 3, 4]));
console.log(mulNums([1, 2, 3, 4]));

