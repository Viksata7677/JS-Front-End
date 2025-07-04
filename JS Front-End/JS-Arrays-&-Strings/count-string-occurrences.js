function countOccurrences(text, searchedWord) {
    let occurrences = 0;

    let textWords = text.split(' ');
    for (let word of textWords) {
        if (word === searchedWord) {
            occurrences += 1;
        }
    }
    console.log(occurrences);
}