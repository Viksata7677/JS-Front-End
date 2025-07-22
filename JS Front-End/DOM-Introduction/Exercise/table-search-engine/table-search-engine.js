function solve() {
   const tableInfoEls = document.querySelectorAll('td')
   const searchEl = document.getElementById('searchField');
   const allTrEls = document.querySelectorAll('tr');

   allTrEls.forEach(trEl => {
      trEl.classList.remove('select');
   })

   const search = searchEl.value.trim().toLowerCase();

   if (!search) {
      return;
   }

   tableInfoEls.forEach(td => {
      if (td.textContent.toLowerCase().includes(search)) {
         const trEl = td.parentElement;
         trEl.classList.add('select');
      }
   })
}