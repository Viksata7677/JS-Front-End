document.addEventListener('DOMContentLoaded', focused);

function focused() {
    const inputEl = document.querySelectorAll('input');

    inputEl.forEach(input => {
        input.addEventListener('focus', onFocus);
        input.addEventListener('blur', onBlur);

        function onFocus(e) {
            e.target.parentElement.classList.add('focused');
        }

        function onBlur(e) {
            e.target.parentElement.classList.remove('focused');
        }
    })
}
