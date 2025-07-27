document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const showMoreLessEls = document.querySelectorAll('button');

    showMoreLessEls.forEach(buttonEl => {
        buttonEl.addEventListener('click', handleControlShow);
    });

    function handleControlShow(e) {
        const fullProfileDivEl = e.target.parentElement;
        const radioButtonEl = fullProfileDivEl.querySelector('input[type="radio"]');

        if (radioButtonEl.checked) {
            return;
        }

        const hiddenDivEl = fullProfileDivEl.querySelector('.hidden-fields');

        if (hiddenDivEl.style.display === 'none') {
            hiddenDivEl.style.display = 'block';
            e.target.textContent = 'Show less';
        } else {
            hiddenDivEl.style.display = 'none';
            e.target.textContent = 'Show more';
        }
        
    }
}