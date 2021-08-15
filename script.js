
const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
let shuffledQuestions, currentQuestionIndex;

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
    
}

function selectAnswer() {

}

const questions = [
    {
        question: 'What band does Jeff Ament play in?',
        answers: [
            {text: 'Pearl Jam', correct: true},
            {text: 'Meshuggah', correct: false}
        ]
    }
]