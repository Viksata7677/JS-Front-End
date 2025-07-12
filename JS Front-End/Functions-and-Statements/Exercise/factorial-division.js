function factorialDivision(num1, num2) {
    let factorial1 = calcFactorial(num1);
    let factorial2 = calcFactorial(num2);
    let result = factorial1 / factorial2;

    console.log(result.toFixed(2));
    

    function calcFactorial(num) {
        let factorial = 1;

        for (let factor = 2; factor <= num; factor++) {
            factorial *= factor;
        }

        return factorial;
    }
}