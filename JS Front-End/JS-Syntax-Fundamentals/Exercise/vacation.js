function vacation(groupOfPeople, typeOfGroup, day) {
    let price;
    if (typeOfGroup == 'Students') {
        if (day == 'Friday') {
            price = 8.45;
        } else if (day == 'Saturday') {
            price = 9.80;
        } else if (day == 'Sunday') {
            price = 10.46;
        }

        if (groupOfPeople >= 30) {
            price *= 0.85;
        }
    } else if (typeOfGroup == 'Business') {
        if (day == 'Friday') {
            price = 10.90;
        } else if (day == 'Saturday') {
            price = 15.60;
        } else if (day == 'Sunday') {
            price = 16.00;
        }

        if (groupOfPeople >= 100) {
            groupOfPeople -= 10;
        }
    } else if (typeOfGroup == 'Regular') {
        if (day == 'Friday') {
            price = 15.00;
        } else if (day == 'Saturday') {
            price = 20.00;
        } else if (day == 'Sunday') {
            price = 22.50;
        }

        if (groupOfPeople >= 10 && groupOfPeople <= 20) {
            price *= 0.95;
        }
    }
    console.log(`Total price: ${(groupOfPeople * price).toFixed(2)}`);
}

