function modernTimes(text) {
    let specialWords = [];
    let textArr = text.split(' ');

    for (const word of textArr) {
        if (word.startsWith('#')) {
            let wordWithoutHash = word.slice(1);
            if (/^[A-Za-z]+$/.test(wordWithoutHash)) {
                specialWords.push(wordWithoutHash);
            }
        }
    }

    console.log(specialWords.join('\n'));
}
