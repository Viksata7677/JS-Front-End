function sortListOfNames(arrayOfNames) {
    let sortedList = arrayOfNames.sort((a, b) => a.localeCompare(b));

    for (let element = 0; element < arrayOfNames.length; element++) {
        console.log(`${element + 1}.${arrayOfNames[element]}`);
    }
}
