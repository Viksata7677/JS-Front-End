function toggle() {
    const button = document.querySelector('.button');
    const accordionDiv = document.getElementById('extra');

    if (button.textContent === 'More') {
        accordionDiv.style.display = 'block';
        button.textContent = 'Less';
    } else {
        accordionDiv.style.display = 'none';
        button.textContent = 'More';
    }
    
}