function filterLongWords(words, i) {

    var strArray = [];

    for(word of words) {
        if(word.length >= i) {
            strArray.push(word);
        }
    }

    return strArray;

}

console.log(filterLongWords(['word', 'words', 'longestword', 'threeof', 'two', 'the'], 4));