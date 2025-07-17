function oddOccurrences(str) {
    let words = str.toLowerCase().split(' ');
    let wordOccurrences = new Map();

    for (const word of words) {
        if (wordOccurrences.has(word)) {
            let currentCount = wordOccurrences.get(word);
            wordOccurrences.set(word, currentCount + 1);
        } else {
            wordOccurrences.set(word, 1);
        }
    }

    let result = [];

    for (const [word, occurrences] of wordOccurrences.entries()) {
        if (occurrences % 2 !== 0) {
            result.push(word);
        }
    }

    console.log(result.join(' '));
}
