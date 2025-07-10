function substring(word, text) {
    text = text.toLowerCase();
    let wordFound = false;
    let textArr = text.split(' ');

    if (textArr.includes(word)) {
        wordFound = true;
        console.log(word);
    } else {
        console.log(`${word} not found!`);
        
    }
}