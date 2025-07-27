document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputValueEl = document.querySelector('#inputDistance');
    const inputUnitSelectEl = document.querySelector('#inputUnits');
    const outputUnitSelectEl = document.querySelector('#outputUnits');
    const outputValueEl = document.querySelector('#outputDistance');
    const convertButtonEl = document.querySelector('#convert');

    const unitsToMeters = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    convertButtonEl.addEventListener('click', handleConversion);

    function handleConversion() {
        const inputValue = Number(inputValueEl.value.trim());
        const inputUnit = inputUnitSelectEl.value;
        const outputUnit = outputUnitSelectEl.value;

        const valueInMeters = inputValue * unitsToMeters[inputUnit];
        const finalValue = valueInMeters / unitsToMeters[outputUnit];

        outputValueEl.value = finalValue;
    }
}