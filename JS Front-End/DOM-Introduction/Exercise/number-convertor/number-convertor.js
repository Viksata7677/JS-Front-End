function solve() {
    const numberInputEl = document.getElementById('input');
    const selectEl = document.getElementById('selectMenuTo');
    const resultEl = document.getElementById('result');

    const num = Number(numberInputEl.value.trim());
    const conversionUnit = selectEl.value;

    if (conversionUnit === 'binary') {
        resultEl.value += num.toString(2);
    } else if (conversionUnit === 'hexadecimal') {
        resultEl.value += num.toString(16).toUpperCase();
    }
}
