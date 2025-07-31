function getInfo() {
    const stopIdEl = document.querySelector('#stopId');
    const stopNameDivEl = document.querySelector('#stopName');
    const busesUlEL = document.querySelector('#buses');
    busesUlEL.innerHTML = '';

    const stopId = stopIdEl.value.trim();

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
        .then(res => res.json())
        .then(stopObj => {
            console.log(stopObj );

            stopNameDivEl.textContent = stopObj.name;

            const busEntries = Object.entries(stopObj.buses);

            for (const [busNumber, time] of busEntries) {
                const liEl = document.createElement('li');
                liEl.textContent = `Bus ${busNumber} arrives in ${time} minutes`;
                busesUlEL.appendChild(liEl);
            }
        })
        .catch(err => stopNameDivEl.textContent = 'Error');
}