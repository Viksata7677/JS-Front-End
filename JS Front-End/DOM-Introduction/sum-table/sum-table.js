function sumTable() {
    const costEl = document.querySelectorAll('tbody tr td:nth-child(2):not(#sum)');
    let sumEl = document.getElementById('sum');
    let total = 0
    
    for (const cost of costEl) {
        total += Number(cost.textContent)
    }
    sumEl.textContent = total;

}