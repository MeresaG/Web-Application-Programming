let x = 1;
function AFunc() {
    console.log(x);
    var b = 2;
    function BFunc() {
        var c = 3;
        console.log(x);
        console.log(b);
    }
    BFunc();
}

AFunc();