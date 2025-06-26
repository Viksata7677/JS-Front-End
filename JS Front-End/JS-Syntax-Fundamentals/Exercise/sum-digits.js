function sumDigits(number) {
    let sum = 0;
    let numAsString = String(number);

    for (let i = 0; i < numAsString.length; i++) {
        let currentDigit = Number(numAsString[i]);
        sum += currentDigit;
    }
    console.log(sum);
    
}