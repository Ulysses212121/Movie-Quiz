// import {questions} from './questions.js';

var questionList = document.getElementById("question-list");
var counter = document.getElementById("counter");
var startBtn = document.getElementById("start-btn");
var highScoreBtn = document.getElementById("high-score-btn");





var timeleft = 75;
// var title = questions[i].title;
// var choices = questions.choices;
// var answer = questions.answer;

// console.log(title);
// console.log(choices);
// console.log(answer);

// var downloadTimer = setInterval(function(){
// timeleft--;
// document.getElementById("counter").textContent = timeleft;
// if(timeleft <= 0)
//     clearInterval(downloadTimer);
// },1000);

function createLi() {

    for (let i = 0; i < 4; i++) {
        // if (questions[i].value === null) {
        //     alert("Something Wrong");
        //     return;
        // } else{
        var li = document.createElement("li");
        li.textContent = questions[i].choices[i];
        questionList.appendChild(li);
        // console.log(li.textContent);

    }
}

createLi();