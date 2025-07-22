function solve() {
    const allCheckBoxEl = document.querySelectorAll('input[type="checkbox"]');
    const allTrEls = document.querySelectorAll('tbody tr');
    const outputTextAreaEl = document.getElementById('output');

    const checkedCols = [];
    allCheckBoxEl.forEach((checkboxEl, idx) => {
        if (checkboxEl.checked) {
            checkedCols.push({
                index: idx,
                name: checkboxEl.name
            })
        }
    });

    let report = [];
    
    allTrEls.forEach(trEl => {
        const tdEls = trEl.children;
        let rowData = {};

        checkedCols.forEach(col => {
            const propName = col.name;
            const propValueIndex = col.index;
            const propValue = tdEls[propValueIndex].textContent;
            rowData[propName] = propValue;
        });
        
        report.push(rowData);
    })

    outputTextAreaEl.value = JSON.stringify(report);

}