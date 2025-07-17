function printTowns(arr) {
    let towns = [];

    for (let line of arr) {
        let [town, latitude, longitude] = line.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        
        let townObj = {
            town,
            latitude,
            longitude,
        }

        towns.push(townObj)   
    }

    towns.forEach(town => console.log(town));
    
}