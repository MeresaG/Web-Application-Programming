
function max(numberOne, numberTwo) {

    if(numberOne > numberTwo) {
        return numberOne;
    }
    else if(numberTwo > numberOne) {
        return numberTwo;
    }

    //return numberOne > numberTwo ? numberOne : numberTwo;

}
console.log(max(12, 10));