
function computeSumOfSquares(numbers) {

    var sumOfSquare = numbers.reduce((sumOfSquare, current) => sumOfSquare +(current *current), 0);
    return sumOfSquare;

}


console.log(computeSumOfSquares([1,2,3]) );