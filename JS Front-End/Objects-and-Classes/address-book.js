function addressBook(arr) {
    let peopleAddresses = {}
    
    for (const str of arr) {
        let [name, address] = str.split(':');
        peopleAddresses[name] = address;
    }

    let entries = Object.entries(peopleAddresses).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, address] of entries) {
        console.log(`${name} -> ${address}`);
    }
    
}