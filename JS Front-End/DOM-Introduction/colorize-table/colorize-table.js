function colorize() {
    const targetEl = document.querySelectorAll('table tr:nth-child(even)');
    console.log(targetEl);
    
    for (const row of targetEl) {
        row.style.backgroundColor = 'teal';
    }
}