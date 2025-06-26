function speedLimit(speed, area) {
    let speedlimit = 0;

    if (area == 'motorway') {
        speedlimit = 130;
    } else if (area == 'interstate') {
        speedlimit = 90;
    } else if (area == 'city') {
        speedlimit = 50;
    } else {
        speedlimit = 20;
    }

    if (speed <= speedlimit) {
        console.log(`Driving ${speed} km/h in a ${speedlimit} zone`);
    } else {
        let difference = speed - speedlimit;
        let status = ''

        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedlimit} - ${status}`);
        
    }
}
