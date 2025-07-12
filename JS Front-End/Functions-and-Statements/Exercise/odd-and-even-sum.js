function oddAndEvenSum(num1) {
    let numAsString = num1.toString();
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        let numAsInteger = Number(numAsString[i]);
        if (numAsString[i] % 2 == 0) {
            evenSum += numAsInteger;
        } else {
           oddSum += numAsInteger;
        }
    }
    
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    
}