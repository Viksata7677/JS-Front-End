function printCharactersInRange(charOne, charTwo) {
    let result = [];
    let ascii1 = charOne.charCodeAt();
    let ascii2 = charTwo.charCodeAt();

    let startAscii = Math.min(ascii1, ascii2);
    let endAscii = Math.max(ascii1, ascii2);

    for (let currentAscii = startAscii + 1; currentAscii < endAscii; currentAscii++) {
        let currentChar = String.fromCharCode(currentAscii);
        result.push(currentChar);
    }

    console.log(result.join(' '));
    
}