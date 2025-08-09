const loadGamesButton = document.getElementById('load-games');
const gamesList = document.getElementById('games-list');

const gameNameInput = document.getElementById('g-name');
const typeInput = document.getElementById('type');
const playersInput = document.getElementById('players');
const addGameButton = document.getElementById('add-game');

const changeButton = document.getElementById('change-btn');
const deleteButton = document.getElementById('delete-btn');

const editGameButton = document.getElementById('edit-game');

let selectedGameId = null;

loadGamesButton.addEventListener('click', handleLoadingGames);
addGameButton.addEventListener('click', handleAddingGame);
editGameButton.addEventListener('click', handleEditGame);

const BASE_URL = 'http://localhost:3030/jsonstore/games/'

async function handleLoadingGames() {
    const loadGame = await fetch(BASE_URL);
    const data = await loadGame.json();
    let gameValues = Object.values(data);
    
    gamesList.innerHTML = '';
    gameValues.forEach(gameObj => {  


    const divContent = document.createElement('div');
    divContent.classList.add('content');

    const boardGameDiv = document.createElement('div');
    boardGameDiv.classList.add('board-game');

    const namePEL = document.createElement('p');
    namePEL.textContent = gameObj.name;
    const playerCountPEL = document.createElement('p');
    playerCountPEL.textContent = gameObj.players;
    const typePEL = document.createElement('p');
    typePEL.textContent = gameObj.type;

    const buttonsDivContainer = document.createElement('div');
    buttonsDivContainer.classList.add('buttons-container');
    const changeButton = document.createElement('button');
    changeButton.classList.add('change-btn');
    changeButton.textContent = 'Change';
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');

    divContent.appendChild(namePEL);
    divContent.appendChild(playerCountPEL);
    divContent.appendChild(typePEL);
    buttonsDivContainer.appendChild(changeButton);
    buttonsDivContainer.appendChild(deleteButton);
    boardGameDiv.appendChild(divContent);
    boardGameDiv.appendChild(buttonsDivContainer);
    gamesList.appendChild(boardGameDiv);

    changeButton.addEventListener('click', handleEditGame);
    deleteButton.addEventListener('click', handleDeleteGame);

    function handleEditGame() {
        gameNameInput.value = gameObj.name;
        typeInput.value = gameObj.type;
        playersInput.value = gameObj.players;
        
        editGameButton.disabled = false;
        addGameButton.disabled = true;
        selectedGameId = gameObj._id;

    }

    async function handleDeleteGame() {
        await fetch(`${BASE_URL}${gameObj._id}`, {
            method: 'DELETE'
        });


        await handleLoadingGames();
    }

    
    });
    
}

async function handleAddingGame() {
    let gameName = gameNameInput.value.trim();
    let gameType = typeInput.value.trim();
    let maxPlayers = playersInput.value.trim();

    
    await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: gameName, type: gameType, players: maxPlayers })
    });

    gameNameInput.value = '';
    typeInput.value = '';
    playersInput.value = '';

    await handleLoadingGames();
}

async function handleEditGame() {
    let gameName = gameNameInput.value.trim();
    let gameType = typeInput.value.trim();
    let maxPlayers = playersInput.value.trim();

    await fetch(`${BASE_URL}${selectedGameId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: gameName, type: gameType, players: maxPlayers })
    });
    
    gameNameInput.value = '';
    typeInput.value = '';
    playersInput.value = '';
    

    selectedGameId = null;

    addGameButton.disabled = false;
    editGameButton.disabled = true;
    await handleLoadingGames();
}
