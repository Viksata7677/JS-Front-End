function attachGradientEvents() {
    const gradientDivEl = document.getElementById('gradient');
    const resultDiv = document.getElementById('result');

    gradientDivEl.addEventListener('mousemove', calculatePercentage);

    function calculatePercentage(e) {
        const percentage = Math.floor(e.offsetX / e.target.clientWidth * 100);
        resultDiv.textContent = `${percentage}%`;
    }
}
