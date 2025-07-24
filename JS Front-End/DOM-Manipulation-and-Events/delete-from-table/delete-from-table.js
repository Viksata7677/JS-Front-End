function deleteByEmail() {
    const emailEl = document.querySelectorAll('td:nth-child(2)');
    const inputEl = document.querySelector('input');
    const resultDivEl = document.getElementById('result');

    let isFound = false;

    emailEl.forEach(tdEl => {
        if (tdEl.textContent === inputEl.value.trim()) {
            const parentEl = tdEl.parentElement;
            parentEl.remove();
            resultDivEl.textContent = 'Deleted.';
            isFound = true;
        }
    });

    if (!isFound) {
        resultDivEl.textContent = 'Not found.';
    }

}
