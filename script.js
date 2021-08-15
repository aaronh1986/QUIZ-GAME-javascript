
const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
let shuffledQuestions, currentQuestionIndex;
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame);


function startGame() {
    console.log('I will get what I need')
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
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

function selectAnswer() {

}

const questions = [
    {
        question: 'What famous band does Jeff Ament play in?',
        answers: [
            {text: 'Pearl Jam', correct: true},
            {text: 'Meshuggah', correct: false}
        ]
    },
]