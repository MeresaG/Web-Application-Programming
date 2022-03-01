
function computeSumOfSquaresOfEvensOnly(numbers) {

    var sum = 0;
    for(num of numbers) {
        if(num % 2 == 0 ) {
            sum += (num * num);
        }
    }

    return sum;

}

console.log(computeSumOfSquaresOfEvensOnly([1,2,3,4,5]));