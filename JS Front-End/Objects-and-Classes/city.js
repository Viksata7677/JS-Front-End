function city(object) {
    let entries = Object.entries(object);

    for (const entry of entries) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}