const phonebookUlEL = document.querySelector('#phonebook');
const loadButtonEl = document.querySelector('#btnLoad');
const personInputEL = document.querySelector('#person');
const phoneInputEL = document.querySelector('#phone');
const createBtnEL = document.querySelector('#btnCreate'); 

function attachEvents() {
    loadButtonEl.addEventListener('click', handleLoadRecords);
    createBtnEL.addEventListener('click', handleCreateRecord);
}

attachEvents();

async function handleLoadRecords() {
    const recordsRes = await fetch('http://localhost:3030/jsonstore/phonebook');
    const recordsData = await recordsRes.json();

    const recordsArr = Object.values(recordsData);

    phonebookUlEL.innerHTML = '';

    recordsArr.forEach(recordObj => {
        const liEl = document.createElement('li');
        liEl.textContent = `${recordObj.person}: ${recordObj.phone}`;

        const deletePhoneButton = document.createElement('button');
        deletePhoneButton.textContent = 'Delete';
        liEl.appendChild(deletePhoneButton);
        deletePhoneButton.addEventListener('click', handleDeletePhone);
        phonebookUlEL.appendChild(liEl);
        
        async function handleDeletePhone() {
                const deleteRes = await fetch(`http://localhost:3030/jsonstore/phonebook/${recordObj._id}`, {
                    method: "DELETE"
                });

                handleLoadRecords();
                
        }
    });
    
}

async function handleCreateRecord() {
    const person = personInputEL.value.trim();
    const phone = phoneInputEL.value.trim();

    const createRes = await fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ person, phone })
    });

    const createData = await createRes.json();
    
    personInputEL.value = '';
    phoneInputEL.value = '';

    handleLoadRecords();
}

