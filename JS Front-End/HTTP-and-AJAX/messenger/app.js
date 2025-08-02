const messagesTextareaEl = document.querySelector('#messages');
const authorInputEl = document.querySelector('input[name="author"]');
const contentInputEL = document.querySelector('input[name="content"]');

const submitInputEL = document.querySelector('#submit');
const refreshInputEl = document.querySelector('#refresh');

function attachEvents() {
    submitInputEL.addEventListener('click', handleSubmitMessage);
    refreshInputEl.addEventListener('click', handleRefreshMessages);
}

async function handleSubmitMessage() {
    const author = authorInputEl.value.trim();
    const content = contentInputEL.value.trim();

    const messageObj = { author, content };

    const createRes = await fetch('http://localhost:3030/jsonstore/messenger', {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(messageObj)
    });

    const createData = await createRes.json();
    console.log(createData);
    
}

async function handleRefreshMessages() {
    const messagesRes = await fetch('http://localhost:3030/jsonstore/messenger');
    const messagesData = await messagesRes.json();
    
    const messagesArr = Object.values(messagesData);

    let messages = [];

    messagesArr.forEach(messageObj => {
        messages.push(`${messageObj.author}: ${messageObj.content}`)
    });

    messagesTextareaEl.textContent = messages.join('\n');
    
}

attachEvents();