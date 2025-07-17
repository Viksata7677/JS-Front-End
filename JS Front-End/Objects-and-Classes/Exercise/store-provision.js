function manageProducts(currentStockArr, orderedForDeliveryArr) {
    let productQtys = {};
    
    for (let i = 0; i < currentStockArr.length; i += 2) {
        let product = currentStockArr[i];
        let qty = Number(currentStockArr[i+1]);

        productQtys[product] = qty;
    }
    
    for (let i = 0; i < orderedForDeliveryArr.length; i += 2) {
        let product = orderedForDeliveryArr[i];
        let qty = Number(orderedForDeliveryArr[i+1]);
        
        if (product in productQtys) {
            productQtys[product] += qty;
        } else {
            productQtys[product] = qty;
        }
    }
    
    let entries = Object.entries(productQtys);

    for (const [product, qty] of entries) {
        console.log(`${product} -> ${qty}`);
    }

}