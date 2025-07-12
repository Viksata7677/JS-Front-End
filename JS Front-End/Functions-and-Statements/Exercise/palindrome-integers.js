function checkForPalindromes(arr) {
    for (const num of arr) {
        let isPalindrome = checkIfPalindrome(num);
        console.log(isPalindrome);
    }


    function checkIfPalindrome(num) {
        let numAsString = String(num);
        let reversedString = numAsString.split('').reverse().join('');

        return numAsString === reversedString;
    }
}