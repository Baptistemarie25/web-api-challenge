// variables
var timerEL = document.getElementById('timer')
var timeLeft = 120;

var minutes = Math.floor(timeLeft / 60);
var seconds = 

var startButtonEl = document.getElementById('start-button')
startButtonEl.addEventListener('click', startQuiz())

//begin quiz function
function startQuiz() {
    //when button is clicked I want the section to disappear and for quiz to appear and timer to start
    setInterval()

    nextQuestion()
}

//to move on to next question
function nextQuestion() {

}

function selectAnswer() {

}

// quiz questions and answers 
var quizQuestions = [
    {
        question: 'What is an array in JavaScript?',
        answers: [
            {text:'A single variable used to store elements', correct: true },
            {text:'Hyper text markup language', correct: false },
            {text:'Generates random number', correct: false },
            {text:'colors', correct: false },
        ]
    },
    {
        question: 'What is a loop used for in javascript?',
        answers: [
            {text:'To calculate a value', correct: false},
            {text:'Performs a task', correct: false},
            {text:'Styling', correct: false},
            {text:'To perform repeated tasks based on a condition', correct: true},
        ]
    },
    {
        question: 'What is a function in JavaScript?',
        answers: [
            {text:'Generates random number', correct: false },
            {text:'Set of statements that performs a task or calculates a value', correct: true},
            {text:'A single variable used to store elements', correct: false},
            {text:'Sets a decimal to a whole number', correct: false},
        ]
    },
    {
        question: 'Which function returns the largest integer less than or equal to a given number?',
        answers: [
            
        ]
    }
]
