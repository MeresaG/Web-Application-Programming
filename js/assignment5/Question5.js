function reverse(str) {
    var i = 0;
    var strSplit = str.split("");
    var j = strSplit.length - 1;
    while(i < j) {
        let temp = strSplit[j];
        strSplit[j] = strSplit[i];
        strSplit[i] = temp;
        i += 1;
        j -= 1;
    }
    return strSplit.join("");
}

console.log(reverse("jag testar"));