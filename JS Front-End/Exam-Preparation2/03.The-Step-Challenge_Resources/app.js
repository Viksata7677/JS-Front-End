const loadRecordsButton = document.getElementById('load-records');
const listUl = document.getElementById('list');

const nameInput = document.getElementById('p-name');
const stepsInput = document.getElementById('steps');
const caloriesInput = document.getElementById('calories');

const addRecordButton = document.getElementById('add-record');
const editRecordButton = document.getElementById('edit-record');

loadRecordsButton.addEventListener('click', handleLoadRecords);
addRecordButton.addEventListener('click', handleAddRecord);
editRecordButton.addEventListener('click', handleEditRecord);

let selectedRecordId = null;

const URL = 'http://localhost:3030/jsonstore/records';

async function handleLoadRecords() {
    const recordsRes = await fetch(URL);
    const recordsData = await recordsRes.json();
    
    const recordsArr = Object.values(recordsData);
    
    listUl.innerHTML = '';
    
    recordsArr.forEach(recordObj => {
        const liEl = document.createElement('li');
        liEl.classList.add('record');
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info');

        const nameP = document.createElement('p');
        nameP.textContent = recordObj.name;
        const stepsP = document.createElement('p');
        stepsP.textContent = recordObj.steps;
        const caloriesP = document.createElement('p');
        caloriesP.textContent = recordObj.calories;


        infoDiv.appendChild(nameP);
        infoDiv.appendChild(stepsP);
        infoDiv.appendChild(caloriesP);

        liEl.appendChild(infoDiv);

        const divWrapper = document.createElement('div');
        divWrapper.classList.add('btn-wrapper');

        const changeButton = document.createElement('button');
        changeButton.textContent = 'Change';
        changeButton.classList.add('change-btn');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');

        divWrapper.appendChild(changeButton);
        divWrapper.appendChild(deleteButton);

        liEl.appendChild(divWrapper);

        listUl.appendChild(liEl);

        changeButton.addEventListener('click', handleShowEdit);
        deleteButton.addEventListener('click', handleDeleteRecord);

        function handleShowEdit() {
            nameInput.value = recordObj.name;
            stepsInput.value = recordObj.steps;
            caloriesInput.value = recordObj.calories;

            addRecordButton.disabled = true;
            editRecordButton.disabled = false;

            selectedRecordId = recordObj._id;
        }

        async function handleDeleteRecord() {
            await fetch(`${URL}/${recordObj._id}`, {
                method: 'DELETE'
            });

            await handleLoadRecords();
        }

    })
}

async function handleAddRecord() {
    const name = nameInput.value.trim();
    const steps = stepsInput.value.trim();
    const calories = caloriesInput.value.trim();

    await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, steps, calories })
    });

    nameInput.value = '';
    stepsInput.value = '';
    caloriesInput.value = '';

    await handleLoadRecords();
}

async function handleEditRecord() {
    const name = nameInput.value.trim();
    const steps = stepsInput.value.trim();
    const calories = caloriesInput.value.trim();

        await fetch(`${URL}/${selectedRecordId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, steps, calories, _id: selectedRecordId })
    });

    nameInput.value = '';
    stepsInput.value = '';
    caloriesInput.value = '';

    addRecordButton.disabled = false;
    editRecordButton.disabled = true;

    await handleLoadRecords();
    
}