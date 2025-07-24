document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputEl = document.getElementById('email');
    const pattern = /[a-z]+@[a-z]+\.[a-z]/;

    inputEl.addEventListener('change', handleInputChange);

    function handleInputChange() {
        const email = inputEl.value.trim();

        if (!pattern.test(email)) {
            inputEl.classList.add('error');
        } else {
            inputEl.classList.remove('error');
        }
    }
}
