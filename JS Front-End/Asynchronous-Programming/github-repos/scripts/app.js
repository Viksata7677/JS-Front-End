function loadRepos() {
   const divResultEl = document.getElementById('res');
   
   fetch("https://api.github.com/users/testnakov/repos")
      .then(res => res.text())
      .then(data => {
         divResultEl.textContent = data;
      });
}