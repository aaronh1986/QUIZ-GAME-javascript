
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
let shuffledQuestions, currentQuestionIndex;
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})


function startGame() {
    console.log('I will get what I need')
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(fight) {
  questionElement.innerText = fight.question;
  fight.answers.forEach(fight => {
      const button = document.createElement('button');
      button.innerText = fight.text;
      button.classList.add('btn');
      if(fight.correct) {
          button.dataset.correct = fight.correct;
      }
      button.addEventListener('click', selectAnswer);
      answerButtonsElement.appendChild(button);
  })
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct);
  })
  if(shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide');
  }else {
      startButton.innerText = 'Go Again?';
      startButton.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if(correct) {
        element.classList.add('correct');
    }else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'What famous band does Jeff Ament play in?',
        answers: [
            {text: 'Pearl Jam', correct: true},
            {text: 'Meshuggah', correct: false}
        ]
    },
    {
        question: 'Is bono a prick?',
        answers: [
            {text: 'Yes', correct: true},
            {text: 'Yes', correct: true},
            {text: 'Yes', correct: true},
            {text: 'Yes', correct: true},
            {text: 'Yes', correct: true},
            {text: 'Yes', correct: true},
            {text: 'Yes', correct: true},
            {text: 'Yes', correct: true}
        ]
    },
    {
        question: 'Who played guitar in Led Zeppelin',
        answers: [
            {text: 'Jimmy Page', correct: true},
            {text: 'Adam Jones', correct: false}
        ]
    },
    {
        question: 'What famous band does Bono play in?',
        answers: [
            {text: 'Pearl Jam', correct: false},
            {text: 'U2', correct: true}
        ]
    },
    {
        question: 'Who wrote the hit "Girls, Girls, Girls"?',
        answers: [
            {text: 'Motley Crue', correct: true},
            {text: 'Poison', correct: false}
        ]
    },
]