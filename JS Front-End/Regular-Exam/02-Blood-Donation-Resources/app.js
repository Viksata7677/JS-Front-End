window.addEventListener("load", solve);

//TODO: Blood Type, Age, and Gender should be non-empty strings. If any of them are empty, the program should not do anything.
function solve() {
  const typeInput = document.getElementById('type');
  const ageInput = document.getElementById('age');
  const genderInput = document.getElementById('gender');
  const registerAsDonor = document.getElementById('register-btn');

  const registeredList = document.getElementById('registered-list');
  const confirmedList = document.getElementById('confirmed-list');

  registerAsDonor.addEventListener('click', handleRegisterDonor);

  function handleRegisterDonor(e) {
    e.preventDefault();

    const type = typeInput.value.trim();
    const age = ageInput.value.trim();
    const gender = genderInput.value.trim();

    const liEl = document.createElement('li');
    const articleEl = document.createElement('article');
    const bloodTypeP = document.createElement('p');
    bloodTypeP.textContent = `Blood Type: ${type}`;
    const genderP = document.createElement('p');
    genderP.textContent = `Gender: ${gender}` ;
    const ageP = document.createElement('p');
    ageP.textContent = `Age: ${age}`;

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-btn');
    const confirmButtom = document.createElement('button');
    confirmButtom.textContent = 'Confirm';
    confirmButtom.classList.add('done-btn');

    articleEl.appendChild(bloodTypeP);
    articleEl.appendChild(genderP);
    articleEl.appendChild(ageP);

    buttonsDiv.appendChild(editButton);
    buttonsDiv.appendChild(confirmButtom);

    liEl.appendChild(articleEl);
    liEl.appendChild(buttonsDiv);

    registeredList.appendChild(liEl);

    typeInput.value = '';
    ageInput.value = '';
    genderInput.value = '';

    editButton.addEventListener('click', handleEditRecord);
    function handleEditRecord() {
      typeInput.value = type;
      ageInput.value = age;
      genderInput.value = gender;

      liEl.remove();
    }

    confirmButtom.addEventListener('click', handleConfirmRecord);
    function handleConfirmRecord() {
      confirmedList.appendChild(liEl);
      editButton.remove();
      confirmButtom.remove();

      const clearButton = document.createElement('button');
      clearButton.textContent = 'Clear';
      clearButton.classList.add('clear-btn');

      liEl.appendChild(clearButton);

      clearButton.addEventListener('click', handleClearRecord);
      function handleClearRecord() {
        liEl.remove();
      }
    }
  }
}
