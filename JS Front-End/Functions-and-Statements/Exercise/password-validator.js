function validatePassword(pass) {
    let isValidLength = checkLength();
    let isAlpha = checkIfAlpha();
    let Min2Digits = checkMin2Digits();

    if (isValidLength && isAlpha && Min2Digits) {
        console.log("Password is valid");
        
    }

    function checkLength() {
        if (pass.length < 6 || pass.length > 10) {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }

        return true;
    }

    function checkIfAlpha() {
        let pattern = /^[A-Za-z0-9]+$/;

        if (!pattern.test(pass)) {
            console.log("Password must consist only of letters and digits");
            return false;
            
        }

        return true;
    }

    function checkMin2Digits() {
        let pattern = /[0-9]{2,}/;

        if (!pattern.test(pass)) {
            console.log("Password must have at least 2 digits");
            return false;
        }

        return true;
    }
}