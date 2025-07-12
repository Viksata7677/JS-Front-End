function printMatrix(n) {

    for (let row = 1; row <= n; row++){
        printRow();
    }

    function printRow() {
        console.log(`${n} `.repeat(n));
        
    }
}