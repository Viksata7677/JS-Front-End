function checkPerfectNumber(num) {
    let properDivisorsSum = 0;

    for (let divisor = 1; divisor < num; divisor++) {
        if (num % divisor === 0) {
            properDivisorsSum += divisor;
        }
    }

    if (properDivisorsSum === num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}