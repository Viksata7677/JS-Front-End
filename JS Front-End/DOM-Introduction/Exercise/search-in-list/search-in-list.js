function solve() {
   const liTowns = document.querySelectorAll('#towns li');
   const searchedText = document.getElementById('searchText');
   const resultDivEl = document.getElementById('result');

   const search = searchedText.value.trim();
   let matches = 0;

   liTowns.forEach(liEl => {
      if (liEl.textContent.includes(search)) {
         liEl.style.fontWeight = 'bold';
         liEl.style.textDecoration = 'underline';
         matches++;
      } else {
         liEl.style.fontWeight = 'normal';
         liEl.style.textDecoration = 'none';
      }
   })

   resultDivEl.textContent = `${matches} matches found`
}