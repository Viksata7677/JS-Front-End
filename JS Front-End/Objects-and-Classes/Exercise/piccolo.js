function manageParking(arr) {
    let cars = new Set();

    for (const str of arr) {
        let [direction, carNumber] = str.split(', ');

        if (direction === 'IN') {
            cars.add(carNumber);
        } else {
            cars.delete(carNumber);
        }
    }

    if (cars.size === 0) {
        console.log("Parking Lot is Empty");
    } else {
        let arr = Array.from(cars);
        arr.sort((a, b) => a.localeCompare(b));
        arr.forEach(carNumber => console.log(carNumber));
    }
}