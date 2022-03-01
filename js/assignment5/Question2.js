function maxOfThree(numberOne, numberTwo, numberThree) {

    if(numberOne > numberTwo && numberOne > numberThree) {
        return numberOne;
    }
    else if(numberTwo > numberOne && numberTwo > numberThree) {
        return numberTwo;
    }
    else if(numberThree > numberOne && numberThree > numberTwo) {
        return numberThree;
    }


}

console.log(maxOfThree(5, 12, 75));