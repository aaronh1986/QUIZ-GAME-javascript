const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(balls) {
  questionElement.innerText = balls.question
  balls.answers.forEach(ball => {
      const button = document.createElement('button');
      button.innerText = ball.text;
      button.classList.add('btn');
      if(ball.correct) {
          button.dataset.correct = ball.correct;
      }
      button.addEventListener('click', selectAnswer);
      answerButtonsElement.appendChild(button);
  })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct);
  })
  if(shuffledQuestions.length > currentQuestionIndex + 1){
      nextButton.classList.remove('hide');
  }else {
      startButton.innerText = "Restart the metal quiz of yo yo"
      startButton.classList.remove('hide');
  }
  nextButton.classList.remove('hide');
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if(correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');

    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'What band does James Hetfield play in?',
        answers: [
            {text: 'Metallica', correct: true},
            {text: 'Posessed', correct: false}
        ]
    },
    {
        question: 'What band does James Hetfield play in?',
        answers: [
            {text: 'Metallica', correct: true},
            {text: 'Posessed', correct: false}
        ]
    },
    {
        question: 'What band does James Hetfield play in?',
        answers: [
            {text: 'Metallica', correct: true},
            {text: 'Posessed', correct: false}
        ]
    },
    {
        question: 'What band does James Hetfield play in?',
        answers: [
            {text: 'Metallica', correct: true},
            {text: 'Posessed', correct: false}
        ]
    },
]