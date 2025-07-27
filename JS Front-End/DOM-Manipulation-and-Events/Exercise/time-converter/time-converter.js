document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const formEls = document.querySelectorAll('form');
    const daysInputEl = document.getElementById('days-input');
    const hoursInputEl = document.getElementById('hours-input');
    const minutesInputEl = document.getElementById('minutes-input');
    const secondsInputEl = document.getElementById('seconds-input');

    formEls.forEach(formEl => {
        formEl.addEventListener('submit', handleSubmit);
    })

    function handleSubmit(e) {
        e.preventDefault();

        const currentFormEL = e.target;
        const currentInputEl = currentFormEL.querySelector('input');
        const originalValue = Number(currentInputEl.value.trim());

        if (currentFormEL.id === 'days') {
            hoursInputEl.value = (originalValue * 24).toFixed(2);
            minutesInputEl.value = (originalValue * 1440).toFixed(2);
            secondsInputEl.value = (originalValue * 86400).toFixed(2);
        } else if (currentFormEL.id ==='hours') {
            const days = originalValue / 24;
            daysInputEl.value = days.toFixed(2);
            minutesInputEl.value = (days * 1440).toFixed(2);
            secondsInputEl.value = (days * 86400).toFixed(2);
            
        } else if (currentFormEL.id === 'minutes') {
            const days = originalValue / 1440;
            daysInputEl.value = days.toFixed(2);
            hoursInputEl.value = (days * 24).toFixed(2);
            secondsInputEl.value = (days * 86400).toFixed(2);
        } else if (currentFormEL.id === 'seconds') {
            const days = originalValue / 86400;
            daysInputEl.value = days.toFixed(2);
            hoursInputEl.value = (days * 24).toFixed(2);
            minutesInputEl.value = (days * 1440).toFixed(2);
        }
    }
}