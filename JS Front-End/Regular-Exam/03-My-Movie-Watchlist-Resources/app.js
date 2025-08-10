const BASE_URL = 'http://localhost:3030/jsonstore/movies/';
const loadMoviesButton = document.getElementById('load-movies');
loadMoviesButton.addEventListener('click', handleLoadMovies);
const movieListDiv = document.getElementById('movie-list');

const movieTitle = document.getElementById('title');
const directorInput = document.getElementById('director');
const releaseYear = document.getElementById('year');
const addMovie = document.getElementById('add-movie');
const editMovie = document.getElementById('edit-movie');

let movieId = null;

addMovie.addEventListener('click', handleAddMovie);
editMovie.addEventListener('click', handleEditMovie);

async function handleLoadMovies() {
    const loadMovies = await fetch(BASE_URL);
    const data = await loadMovies.json();
    let movieArr = Object.values(data);

    movieListDiv.innerHTML = '';
    editMovie.disabled = true;
    
    movieArr.forEach(movieObj => {
        const director = movieObj.director;
        const title = movieObj.title;
        const year = movieObj.year;

        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');

        const titlePEl = document.createElement('p');
        titlePEl.textContent = title;
        const directorPEl = document.createElement('p');
        directorPEl.textContent = director;
        const yearPEl = document.createElement('p');
        yearPEl.textContent = year;

        const buttonsContainerDiv = document.createElement('div');
        buttonsContainerDiv.classList.add('buttons-container');
        const changeButton = document.createElement('button');
        changeButton.textContent = 'Change';
        changeButton.classList.add('change-btn');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');

        contentDiv.appendChild(titlePEl);
        contentDiv.appendChild(directorPEl);
        contentDiv.appendChild(yearPEl);

        buttonsContainerDiv.appendChild(changeButton);
        buttonsContainerDiv.appendChild(deleteButton);

        movieDiv.appendChild(contentDiv);
        movieDiv.appendChild(buttonsContainerDiv);

        movieListDiv.appendChild(movieDiv);
        
        changeButton.addEventListener('click', handleChangeMovie);
        function handleChangeMovie() {
            movieId = movieObj._id;
            
            movieTitle.value = title;
            directorInput.value = director;
            releaseYear.value = year;
            
            editMovie.disabled = false;
            addMovie.disabled = true;
            movieDiv.remove();

        }

        deleteButton.addEventListener('click', handleDeleteMovie);

        async function handleDeleteMovie() {
            await fetch(`${BASE_URL}${movieObj._id}`, {
                method: 'DELETE',
            });

            await handleLoadMovies();

        }

    });
}

async function handleAddMovie() {
    const title = movieTitle.value.trim();
    const director = directorInput.value.trim();
    const year = releaseYear.value.trim();

    await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, director, year})
    });

    movieTitle.value = '';
    directorInput.value = '';
    releaseYear.value = '';
    
    await handleLoadMovies();
}


async function handleEditMovie() {
    const title = movieTitle.value.trim();
    const director = directorInput.value.trim();
    const year = releaseYear.value.trim();

    await fetch(`${BASE_URL}${movieId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, director, year, _id: movieId})
    });

    movieTitle.value = '';
    directorInput.value = '';
    releaseYear.value = '';
    
    editMovie.disabled = true;
    addMovie.disabled = false;
    
    
    await handleLoadMovies();
}