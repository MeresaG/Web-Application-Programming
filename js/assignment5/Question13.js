function printFibo(n, a, b) {

    console.log("=============");

    if(n == 1) {
        console.log(a);
    }
    else if(n == 2) {
        console.log(a + " " + b);   
    }
    else {
        console.log(a + "\n" + b);   
        for(let i = 2 ; i < n; i++) {
            var tmp = b;
            b = a + b;
            a = tmp;
            console.log(b);
        }
    }


}

printFibo(n=1, a=0, b=1);

printFibo(n=2, a=0, b=1);
printFibo(n=3, a=0, b=1);
printFibo(n=6, a=0, b=1);
printFibo(n=10, a=0, b=1);