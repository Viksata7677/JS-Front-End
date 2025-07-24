function addItem() {
    const ulEl = document.getElementById('items');
    const newItemEl = document.getElementById('newItemText');
    const newLiEl = document.createElement('li');
    newLiEl.textContent = newItemEl.value.trim();
    ulEl.appendChild(newLiEl);
    
}
