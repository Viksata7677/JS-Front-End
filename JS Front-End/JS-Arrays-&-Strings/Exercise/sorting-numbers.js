function sortingNumbers(array) {
    let sortedArray = array.sort((a, b) => a - b);
    let customSortedArray = [];

    while (sortedArray.length > 0) {
        let firstElement = array.shift();
        let lastElement = array.pop();
        customSortedArray.push(firstElement);
        customSortedArray.push(lastElement);
    }

    return(customSortedArray);
    
}