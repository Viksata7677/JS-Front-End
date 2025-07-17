function tracker(arr) {
    let wordOccurrences = {};
    let searchedWordsArr = arr.shift().split(' ');

    for (const word of searchedWordsArr) {
        wordOccurrences[word] = 0;
    }

    for (const word of arr) {
        if (word in wordOccurrences) {
            wordOccurrences[word] += 1;
        }
    }
    
    let entries = Object.entries(wordOccurrences).sort((a, b) => b[1] - a[1]);
    for (const [word, occurrences] of entries) {
        console.log(`${word} - ${occurrences}`);
    }
    
}