window.addEventListener("load", solve);

function solve() {
  const nameEl = document.getElementById('name');
  const phoneNumber = document.getElementById('phone');
  const categoryEl = document.getElementById('category');
  const addButton = document.getElementById('add-btn');
  const ulCheckList = document.getElementById('check-list');
  const ulContactList = document.getElementById('contact-list');

  addButton.addEventListener('click', handleAddingContact);

  function handleAddingContact(e) {
    e.preventDefault();

    const name = nameEl.value.trim();
    const phone = phoneNumber.value.trim();
    const category = categoryEl.value.trim();

    const liEl = document.createElement('li');
    const article = document.createElement('article');

    const namePEl = document.createElement('p');
    namePEl.textContent = `name:${name}`;

    const phonePEl = document.createElement('p');
    phonePEl.textContent = `phone:${phone}`;

    const categoryPEl = document.createElement('p');
    categoryPEl.textContent = `category:${category}`;

    const buttonsDiv = document.createElement('div');
    const editButton = document.createElement('button');
    const saveButton = document.createElement('button');

    buttonsDiv.classList.add('buttons');
    editButton.classList.add('edit-btn');
    saveButton.classList.add('save-btn');

    article.appendChild(namePEl);
    article.appendChild(phonePEl);
    article.appendChild(categoryPEl);

    buttonsDiv.appendChild(editButton);
    buttonsDiv.appendChild(saveButton);

    liEl.appendChild(article);
    liEl.appendChild(buttonsDiv);

    ulCheckList.appendChild(liEl);

    nameEl.value = '';
    phoneNumber.value = '';
    categoryEl.value = '';

    editButton.addEventListener('click', handleEditingContact);

    function handleEditingContact() {
      nameEl.value = name;
      phoneNumber.value = phone;
      categoryEl.value = category;
      liEl.remove();
    }

    saveButton.addEventListener('click', handleAddingContact);

    function handleAddingContact() {
      ulContactList.appendChild(liEl);
      saveButton.remove();
      editButton.remove();

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('del-btn');

      liEl.appendChild(deleteButton);

      deleteButton.addEventListener('click', handleDeletingContact);

      function handleDeletingContact() {
        liEl.remove();
      }
    }
  }
  }
  