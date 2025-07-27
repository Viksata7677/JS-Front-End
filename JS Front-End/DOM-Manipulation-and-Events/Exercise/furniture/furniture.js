document.addEventListener('DOMContentLoaded', solve);

function solve() {
  const inputFormEL = document.querySelector('#input');
  const inputTextAreaEl = document.querySelector('#input textarea');
  const tbodyEl = document.querySelector('tbody');

  const shopFormEL = document.querySelector('#shop');
  const resultTextAreaEl = document.querySelector('#shop textarea');



  inputFormEL.addEventListener('submit', handleGenerageProducts);
  shopFormEL.addEventListener('submit', handleBuyProducts);

  function handleGenerageProducts(e) {
    e.preventDefault();

    const json = inputTextAreaEl.value.trim();
    const furnitureArr = JSON.parse(json);
    furnitureArr.forEach(furnitureObj => {
      const trEl = document.createElement('tr');
      const imgTdEl = document.createElement('td');
      const imgEl = document.createElement('img');
      imgEl.src = furnitureObj.img;
      imgTdEl.appendChild(imgEl);

      const nameTdEl = document.createElement('td');
      const namePEl = document.createElement('p');
      namePEl.textContent = furnitureObj.name;
      nameTdEl.appendChild(namePEl);

      const priceTdEl = document.createElement('td');
      const pricePEl = document.createElement('p');
      pricePEl.textContent = furnitureObj.price;
      priceTdEl.appendChild(pricePEl);

      const decFactorTdEl = document.createElement('td');
      const decFactorPEl = document.createElement('p');
      decFactorPEl.textContent = furnitureObj.decFactor;
      decFactorTdEl.appendChild(decFactorPEl);

      const checkboxTdEL = document.createElement('td');
      const checkedInputEl = document.createElement('input');
      checkedInputEl.type = 'checkbox';
      checkboxTdEL.appendChild(checkedInputEl);

      trEl.appendChild(imgTdEl);
      trEl.appendChild(nameTdEl);
      trEl.appendChild(priceTdEl);
      trEl.appendChild(decFactorTdEl);
      trEl.appendChild(checkboxTdEL);

      tbodyEl.appendChild(trEl);
    });
    
  }

  function handleBuyProducts(e) {
    e.preventDefault();

    const formEl = e.target;
    const allSelectedCheckboxEls = Array.from(formEl.querySelectorAll('input:checked'));
    const allSelectedTrEls = allSelectedCheckboxEls.map(checkboxEl => checkboxEl.closest('tr'));
    const allFurnitureNameEls = allSelectedTrEls.map(trEl => trEl.querySelector('td:nth-child(2) p').textContent);
    const allFurniturePrices = allSelectedTrEls.map(trEl => Number(trEl.querySelector('td:nth-child(3) p').textContent));
    const allFurnitureDecFactor = allSelectedTrEls.map(trEl => Number(trEl.querySelector('td:nth-child(4) p').textContent));
    const totalFurniturePrice = allFurniturePrices.reduce((acc, val) => acc + val);
    const avgFurnitureDecFactor = allFurnitureDecFactor.reduce((acc, val) => acc + val) / allFurnitureDecFactor.length;

    resultTextAreaEl.value = `Bought furniture: ${allFurnitureNameEls.join(', ')}\nTotal price: ${totalFurniturePrice}\nAverage decoration factor: ${avgFurnitureDecFactor}`;

      
    
  }

}