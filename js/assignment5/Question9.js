
function printOddNumbersOnly(numbers) {

    for(number in numbers) {
        if(number%2 != 0) {
            console.log(number);
        }
    }

}

printOddNumbersOnly([1,2,3,5,6,7,8,12]);