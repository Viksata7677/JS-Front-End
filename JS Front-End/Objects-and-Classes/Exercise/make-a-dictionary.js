function makeDictionary(arr) {
    let dictionary = {};

    for (const jsonStr of arr) {
        let termObj = JSON.parse(jsonStr);
        let entries = Object.entries(termObj);
        let [term, definition] = entries[0];
        
        dictionary[term] = definition;
    }

    let entries = Object.entries(dictionary).sort((a,b ) => a[0].localeCompare(b[0]));
    
    for (const [term, definition] of entries) {
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
    
}

