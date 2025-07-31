const locationInputEl = document.querySelector('#location');
const forecastDivEl = document.querySelector('#forecast');
const currentDivEl = document.querySelector('#current');
const upcomingDivEL = document.querySelector('#upcoming');
const submitInputEL = document.querySelector('#submit');


function attachEvents() {
    submitInputEL.addEventListener('click', handleWeatherReport);
}

const symbols = {
    'Sunny': '&#x2600;',
    'Partly sunny': '&#x26C5;',
    'Overcast': '&#x2601;',
    'Rain': '&#x2614;',
    'Degrees': '&#176;'
};

async function handleWeatherReport() {
    try {
        const allLocationsRes = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
        const allLocationsData = await allLocationsRes.json();
        
        const search = locationInputEl.value.trim();
        const locationObj = allLocationsData.find(loc => loc.name === search);
        
        const currentConditionsRes = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${locationObj.code}`);
        const currentConditionsData = await currentConditionsRes.json();
        
        const threeDayRes = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${locationObj.code}`);
        const threeDayData = await threeDayRes.json();

        loadCurrentForecast();
        loadThreeDayForecast();

        function loadCurrentForecast() {
            const forecastsDivEl = document.createElement('div');
            forecastsDivEl.classList.add('forecasts');

            const symbolSpanEl = document.createElement('span');
            symbolSpanEl.classList.add('condition', 'symbol');
            symbolSpanEl.innerHTML = symbols[currentConditionsData.forecast.condition];

            const conditionSpanEL = document.createElement('span');
            conditionSpanEL.classList.add('condition');

            const fullLocationSpanEL = document.createElement('span');
            fullLocationSpanEL.classList.add('forecast-data');
            fullLocationSpanEL.textContent = currentConditionsData.name;

            const degreesSpanEl = document.createElement('span');
            degreesSpanEl.classList.add('forecast-data');
            degreesSpanEl.innerHTML = `${currentConditionsData.forecast.low}${symbols.Degrees}/${currentConditionsData.forecast.high}${symbols.Degrees}`;
            
            const descriptionSpanEl = document.createElement('span');
            descriptionSpanEl.classList.add('forecast-data');
            descriptionSpanEl.textContent = currentConditionsData.forecast.condition;

            conditionSpanEL.appendChild(fullLocationSpanEL);
            conditionSpanEL.appendChild(degreesSpanEl);
            conditionSpanEL.appendChild(descriptionSpanEl);

            forecastsDivEl.appendChild(symbolSpanEl);
            forecastsDivEl.appendChild(conditionSpanEL);

            currentDivEl.appendChild(forecastsDivEl);
        }

        function loadThreeDayForecast() {
            const forecastInfoDivEL = document.createElement('forecast-info');
            forecastInfoDivEL.classList.add('forecast-info');

            for (const { condition, high, low } of threeDayData.forecast) {
                const upcomingSpanEl = document.createElement('span');
                upcomingSpanEl.classList.add('upcoming');

                const symbolSpanEl = document.createElement('span');
                symbolSpanEl.classList.add('symbol');
                symbolSpanEl.innerHTML = symbols[condition];

                const degreesSpanEl = document.createElement('span');
                degreesSpanEl.classList.add('forecast-data');
                degreesSpanEl.innerHTML = `${low}${symbols.Degrees}/${high}${symbols.Degrees}`;

                const conditionSpanEl = document.createElement('span');
                conditionSpanEl.classList.add('forecast-data');
                conditionSpanEl.textContent = condition;

                upcomingSpanEl.appendChild(symbolSpanEl);
                upcomingSpanEl.appendChild(degreesSpanEl);
                upcomingSpanEl.appendChild(conditionSpanEl);

                forecastInfoDivEL.appendChild(upcomingSpanEl);

                upcomingDivEL.appendChild(forecastInfoDivEL);
            }
        }

    } catch {
        forecastDivEl.textContent = 'Error';
    }
    
    forecastDivEl.style.display = 'block';
    
}

attachEvents();