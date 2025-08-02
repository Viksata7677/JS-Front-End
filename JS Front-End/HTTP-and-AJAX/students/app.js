const tBodyEl = document.querySelector('tbody');
const formEL = document.querySelector('#form');

const firstNameInput = document.querySelector('input[name="firstName"]');
const lastNameInput = document.querySelector('input[name="lastName"]');
const facultyNumberInput = document.querySelector('input[name="facultyNumber"]');
const gradeInput = document.querySelector('input[name="grade"]');

formEL.addEventListener('submit', handleCreateStudent);

async function handleCreateStudent(e) {
    e.preventDefault();

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const facultyNumber = facultyNumberInput.value.trim();
    const grade = Number(gradeInput.value.trim());

    const createRes = await fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName,
            lastName,
            facultyNumber,
            grade
        })
    });
    const createData = await createRes.json();
    console.log(createData);
    handleLoadStudents();


}

async function handleLoadStudents() {
    const studentsRes = await fetch('http://localhost:3030/jsonstore/collections/students');
    const studentsData = await studentsRes.json();
    const studentsArr = Object.values(studentsData);

    tBodyEl.innerHTML = ''

    studentsArr.forEach(studentObj => {
        const trEl = document.createElement('tr');

        const firstNameTdEl = document.createElement('td');
        firstNameTdEl.textContent = studentObj.firstName;

        const lastNameTdEl = document.createElement('td');
        lastNameTdEl.textContent = studentObj.lastName;

        const facultyNumberTdEl = document.createElement('td');
        facultyNumberTdEl.textContent = studentObj.facultyNumber;

        const gradeTdEl = document.createElement('td');
        gradeTdEl.textContent = studentObj.grade;

        trEl.appendChild(firstNameTdEl);
        trEl.appendChild(lastNameTdEl);
        trEl.appendChild(facultyNumberTdEl);
        trEl.appendChild(gradeTdEl);

        tBodyEl.appendChild(trEl);
    })
}