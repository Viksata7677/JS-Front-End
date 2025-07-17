function calc() {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const sumEl = document.getElementById('sum');

    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);

    const sum = num1 + num2;

    sumEl.value = sum;
}