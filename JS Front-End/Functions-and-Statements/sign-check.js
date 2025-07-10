function signCheck(numOne, numTwo, numThree) {
    let numsArr = [numOne, numTwo, numThree];
    let negativeNumsArr = numsArr.filter(num => num < 0);

    if (negativeNumsArr.length % 2 !== 0) {
        console.log('Negative');
    } else {
        console.log('Positive');
    }
}
