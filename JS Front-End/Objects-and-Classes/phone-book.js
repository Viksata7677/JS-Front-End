function personInfo(arr) {
    let peopleNumbers = {};

    for (const str of arr) {
        let [name, phone] = str.split(' ');
        peopleNumbers[name] = phone;
    }

    let entries = Object.entries(peopleNumbers);
    
    for (const entry of entries) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}