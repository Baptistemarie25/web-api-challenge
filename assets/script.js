// variables
var timerEL = document.getElementById('clock')
var timeLeft = 120;
var minutes = Math.floor(timeLeft / 60);
var seconds = ((timeLeft / 60) % 1) * 60; 

var questionNum = 0;

var startButtonEl = document.getElementById('start-button')
startButtonEl.addEventListener('click', startQuiz)

//function for quiz timer 
function countDown(){
    timeLeft--;
    minutes = Math.floor(timeLeft / 60);
    //timeLeft divinng by 60 to get number of minutes. %1 is finding remainder when divided by 1.  in the  case of 119 seconds. the (timeLeft / 60) will give 1.98 so % 1 will return just the 0.9. after that the * 60 will take the decimal and   put it back into seconds
    seconds = Math.round(((timeLeft / 60) % 1) * 60); 
    timerEL.innerHTML= minutes + ':' + seconds
}

//to move on to next question
function moveToNextQuestion() {
    questionNum++;
    if(questionNum < quizQuestions.length){
        displayQuestion();
    } else {
        // game over
    }
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
            {text:'Math.random()', correct: false},
            {text:'Math.floor()', correct: true},
            {text:'Array', correct: false},
            {text:'Function Expression', correct: false}
        ]
    }
]



