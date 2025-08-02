const loadButtonEl = document.querySelector('#btnLoadPosts');
const postSelectEL = document.querySelector('#posts');
const viewButtonEL = document.querySelector('#btnViewPost');
const titleH1El = document.querySelector('#post-title');
const bodyPEl = document.querySelector('#post-body');
const commentsUlEl = document.querySelector('#post-comments');

function attachEvents() {
    loadButtonEl.addEventListener('click', handleLoadPosts);
    viewButtonEL.addEventListener('click', handleDisplayPost);
    
}

attachEvents();

async function handleLoadPosts() {
    const postsRes = await fetch('http://localhost:3030/jsonstore/blog/posts');
    const postsData = await postsRes.json();

    const postsArr = Object.values(postsData);

    postsArr.forEach(postObj => {
        const optionEl = document.createElement('option');
        optionEl.value = postObj.id;
        optionEl.textContent = postObj.title;

        postSelectEL.appendChild(optionEl);
    })
    
    
}

async function handleDisplayPost() {
    const selectedPostId = postSelectEL.value;
    const postsRes = await fetch('http://localhost:3030/jsonstore/blog/posts');
    const postsData = await postsRes.json();
    const postsArr = Object.values(postsData);
    
    const selectedPostObj = postsArr.find(p => p.id === selectedPostId);

    titleH1El.textContent = selectedPostObj.title;
    bodyPEl.textContent = selectedPostObj.body;

    const commentsRes = await fetch('http://localhost:3030/jsonstore/blog/comments');
    const commentsData = await commentsRes.json();

    const commentsArr = Object.values(commentsData);
    const filteredComments = commentsArr.filter(c => c.postId === selectedPostId);

    commentsUlEl.innerHTML = ''

    filteredComments.forEach(commentObj => {
        const liEl = document.createElement('li');
        liEl.textContent = commentObj.text;
        commentsUlEl.appendChild(liEl);

    })
}