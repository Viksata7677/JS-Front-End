function subtract() {
    const firstRow = document.getElementById('firstNumber');
    const secondRow = document.getElementById('secondNumber');
    const resultEl = document.getElementById('result');

    const firstNum = Number(firstRow.value);
    const secondNum = Number(secondRow.value);
    const result = firstNum - secondNum;

    resultEl.textContent = result;

}