function fruit(typeFruit, grams, pricePerKilogram) {
    let weightInKilogram = grams / 1000;
    let price = weightInKilogram * pricePerKilogram;
    
    console.log(`I need $${price.toFixed(2)} to buy ${weightInKilogram.toFixed(2)} kilograms ${typeFruit}.`);
    
}