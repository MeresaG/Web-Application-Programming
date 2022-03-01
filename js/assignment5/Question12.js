function findSecondBiggest(numbers) {

    if(numbers.length < 2) return false;
    var max = numbers[0] > numbers[1] ? numbers[0]:numbers[1];
    var secMax =numbers[1] < numbers[0] ? numbers[1]:numbers[0];
    for(let i = 2 ; i < numbers.length; i++) {

        if(numbers[i] > max) {
            var tmp = max;
            max = numbers[i];
            secMax = tmp;
        }

        else if(numbers[i] > secMax) {
            secMax = numbers[i];
        }



    }

    return secMax;

}

console.log(findSecondBiggest([19,9,11,0,12]));