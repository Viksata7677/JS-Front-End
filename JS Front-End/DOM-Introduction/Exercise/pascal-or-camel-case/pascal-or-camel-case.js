function solve() {
  const textInputEl = document.getElementById('text');
  const namingConventionEl = document.getElementById('naming-convention');
  const resultEl = document.getElementById('result');

  const textToConvert = textInputEl.value.trim().toLowerCase();
  const namingConvention = namingConventionEl.value.trim();
  const words = textToConvert.split(' ');


  if (namingConvention === 'Camel Case') {
    resultEl.textContent = words[0] + words.slice(1).map(word => word[0].toUpperCase() + word.slice(1)).join('');
  } else if (namingConvention === 'Pascal Case') {
    resultEl.textContent = words.map(word => word[0].toUpperCase() + word.slice(1)).join('');
  } else {
    resultEl.textContent = 'Error!';
  }
}
