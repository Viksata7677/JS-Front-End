function addItem() {
    const ulEl = document.getElementById('items');
    const newItemEl = document.getElementById('newItemText');
    const newLiEl = document.createElement('li');
    newLiEl.textContent = newItemEl.value.trim();

    const deleteAEl = document.createElement('a');
    deleteAEl.textContent = '[Delete]';
    deleteAEl.href = '#';

    deleteAEl.addEventListener('click', deleteListItem);

    function deleteListItem(e) {
        newLiEl.remove();
    }

    newLiEl.appendChild(deleteAEl);

    ulEl.appendChild(newLiEl);


}
