function extractText() {
    const liEls = document.querySelectorAll('#items li');
    const textAreaEl = document.getElementById('result');

    for (const liEl of liEls) {
        const liText = liEl.textContent;
        textAreaEl.textContent += liText + '\n';
    }
}