document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const allAddButtonEls = document.querySelectorAll('.add-product');
   const textAreaEl = document.querySelector('textarea');
   const checkoutButtonEl = document.querySelector('.checkout');

   allAddButtonEls.forEach(buttonEl => {
      buttonEl.addEventListener('click', handleProductAdd);

   });

   checkoutButtonEl.addEventListener('click', handleCheckout);

   
   let products = new Set();
   let totalPrice = 0;
   
   function handleProductAdd(e) {
      const outerProductDivEl = e.target.closest('.product');
      const productTitleDivEl = outerProductDivEl.querySelector('.product-title');
      const product = productTitleDivEl.textContent;
      
      const priceDivEl = outerProductDivEl.querySelector('.product-line-price');
      const price = Number(priceDivEl.textContent);
      
      textAreaEl.value += `Added ${product} for ${price.toFixed(2)} to the cart.\n`;
      products.add(product);
      totalPrice += price;
      
   }

   function handleCheckout() {
      const productsStr = Array.from(products).join(', ');
      textAreaEl.value += `You bought ${productsStr} for ${totalPrice.toFixed(2)}.`;
      checkoutButtonEl.disabled = true;
   
      allAddButtonEls.forEach(buttonEl => {
         buttonEl.disabled = true;
      })
   }
}

