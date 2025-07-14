function jsonToObject(json) {
    let object = JSON.parse(json);
    
    let entries = Object.entries(object)
    
    for (const entry of entries) {
        console.log(`${entry[0]}: ${entry[1]}`);
    }
}