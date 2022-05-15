// variables
var timerEL = document.getElementById('clock')
var timeLeft = 120;
var minutes = Math.floor(timeLeft / 60);
var seconds = ((timeLeft / 60) % 1) * 60; 

var questionNum = 0;

var startButtonEl = document.getElementById('start-button')
startButtonEl.addEventListener('click', startQuiz)





