document.addEventListener('DOMContentLoaded', solve);

function solve() {
  const allSectionEls = document.querySelectorAll('.question');
  const answerLiEls = document.querySelectorAll('.quiz-answer');
  const resultsDivEl = document.querySelector('#results');

  const rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let currentQuestionIndex = 0;
  let rightAnswersCount = 0;
  
  answerLiEls.forEach(liEl => {
    liEl.addEventListener('click', handleAnswerSubmit);

    function handleAnswerSubmit(e) {
      const choosenAnswer = e.target.textContent;

      if (choosenAnswer === rightAnswers[currentQuestionIndex]) {
        rightAnswersCount++;
      } 
      const sectionEl = allSectionEls[currentQuestionIndex];
      sectionEl.classList.add('hidden');

      currentQuestionIndex++;
      if (currentQuestionIndex === rightAnswers.length) {
        const h1El = document.createElement('h1');
        if (rightAnswersCount === 3) {
          h1El.textContent = 'You are recognized as top JavaScript fan!';
        } else {
          h1El.textContent = `You have ${rightAnswersCount} right answer${rightAnswersCount === 1 ? '' : 's'}`;
        }
        resultsDivEl.appendChild(h1El);
      } else {
        const newSectionEl = allSectionEls[currentQuestionIndex];
        newSectionEl.classList.remove('hidden');
      }

    }
  })
}