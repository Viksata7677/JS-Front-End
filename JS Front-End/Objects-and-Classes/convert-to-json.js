function convertToJson(firstName, lastName, hairColor) {
    let obj = {
        name : firstName,
        lastName : lastName,
        hairColor: hairColor
    }

    let json = JSON.stringify(obj);
    console.log(json);
    
} 