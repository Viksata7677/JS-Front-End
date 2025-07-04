function censoredWords(text, searchWord) {
    console.log(text.replaceAll(searchWord, '*'.repeat(searchWord.length)));
}