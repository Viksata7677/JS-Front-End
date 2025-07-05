function nthElement(array, step) {
    let result = []
    for (let element = 0; element < array.length; element += step) {
        result.push(array[element]);
    }
    return(result); 
}  
