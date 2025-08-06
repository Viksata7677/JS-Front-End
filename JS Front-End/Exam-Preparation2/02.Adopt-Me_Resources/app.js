window.addEventListener("load", solve);

function solve() {
    const typeAnimalInput = document.getElementById('type');
    const ageInput = document.getElementById('age');
    const genderSelect = document.getElementById('gender');
    const adoptButton = document.getElementById('adopt-btn');

    const ulCheckInfo = document.getElementById('adoption-info');
    const ulAdoptedPets = document.getElementById('adopted-list');

    adoptButton.addEventListener('click', handleAdoptPet);

    function handleAdoptPet(e) {
      e.preventDefault();

      const animalType = typeAnimalInput.value.trim();
      const age = ageInput.value.trim();
      const gender = genderSelect.value.trim();

      if (!animalType || !age || !gender) {
        return;
      }

      const liEL = document.createElement('li');
      const article = document.createElement('article');

      const petPEl = document.createElement('p');
      const genderPEl = document.createElement('p');
      const agePEl = document.createElement('p');

      petPEl.textContent = `Pet:${animalType}`;
      genderPEl.textContent = `Gender:${gender}`;
      agePEl.textContent = `Age:${age}`;


      const buttonsDiv = document.createElement('div');
      const editButton = document.createElement('button');
      const doneButton = document.createElement('button');

      buttonsDiv.classList.add('buttons');
      editButton.classList.add('edit-btn');
      doneButton.classList.add('done-btn');

      editButton.textContent = 'Edit';
      doneButton.textContent = 'Done';

      article.appendChild(petPEl);
      article.appendChild(genderPEl);
      article.appendChild(agePEl);

      buttonsDiv.appendChild(editButton);
      buttonsDiv.appendChild(doneButton);

      liEL.appendChild(article);
      liEL.appendChild(buttonsDiv);

      ulCheckInfo.appendChild(liEL);

      typeAnimalInput.value = '';
      ageInput.value = '';
      genderSelect.value = '';

      editButton.addEventListener('click', handleEditPet);

      function handleEditPet() {
        typeAnimalInput.value = animalType;
        ageInput.value = age;
        genderSelect.value = gender;
        liEL.remove();
      }

      doneButton.addEventListener('click', handleDonePet);

      function handleDonePet() {
        ulAdoptedPets.appendChild(liEL);
        buttonsDiv.remove();

        let clearButton = document.createElement('button');
        clearButton.classList.add('clear-btn');
        clearButton.textContent = 'Clear';
        
        clearButton.addEventListener('click', handleClearPet);

        function handleClearPet() {
          liEL.remove();
        }

        liEL.appendChild(clearButton);

      }
    }
}
  