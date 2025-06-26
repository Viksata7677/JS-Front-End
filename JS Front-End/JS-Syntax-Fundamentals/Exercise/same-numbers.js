function sameNumbers(integerNum) {
    let allDigitsSame = true;
    let sum = 0;

    let numAsStr = String(integerNum);
    let firstChar = numAsStr[0];

    for (let i = 0; i < numAsStr.length; i++) {
        let currentChar = numAsStr[i];

        if (currentChar !== firstChar) {
            allDigitsSame = false;   
        }
        sum += Number(currentChar);
    }

        console.log(allDigitsSame);
        console.log(sum); 
}