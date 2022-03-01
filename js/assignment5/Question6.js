function findLongestWord(words) {

    var str = "";
    for(var word of words) {
        if(word.length > str.length) {
            str = word;
        }
    }
    return str;

}

console.log(findLongestWord(['word', 'longestone', "one", 'two', 'three', "threees"]));