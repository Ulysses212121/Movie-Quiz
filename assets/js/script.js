// import {questions} from './questions.js';

var questionList = document.getElementById("question-list");
var counter = document.getElementById("counter");
var startBtn = document.getElementById("start-btn");
var highScoreBtn = document.getElementById("high-scores-btn");
var compQuestion = document.getElementById("question");
var li = document.getElementsByTagName("li").textContent;
var buttonDiv = document.querySelector(".buttons");
var submitBtn = document.getElementById("submit");
var nameInput = document.getElementById("highScoreInput");
var highScoreList = document.getElementById("highscore-list");



var i = 0;
var timeleft = 75;
var title = questions[i].title;
var choices = questions.choices;
var answer = questions[i].answer;
var userScore = [];
var finalScore = "";



// console.log(title);
// console.log(choices);
// console.log(answer);
function startTimer() {
    var downloadTimer = setInterval(function () {
        timeleft--;
        counter.textContent = timeleft;
        if (timeleft <= 10) {
            counter.style.color = "red";
        }
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
        }
        if (i === questions.length) {
            clearInterval(downloadTimer);
        }
    }, 1000);
}

function questionGen() {
    // var i = 0;
    if (questions[i].title === null) {

    }

    compQuestion.textContent = questions[i].title;
    for (let n = 0; n < 4; n++) {

        var li = document.createElement("li");
        li.textContent = questions[i].choices[n];
        li.setAttribute("data-index", n);
        questionList.appendChild(li);
    }

}

// function highScoreGen () {

// }




questionList.addEventListener("click", function (event) {
    var element = event.target;


    if (element.matches("li") === true) {
        var index = element.textContent;

        if (index === questions[i].answer) {
            element.style.backgroundColor = "green";
            setTimeout(function () {
                var child = questionList.lastElementChild;

                while (child) {


                    questionList.removeChild(child);
                    child = questionList.lastElementChild;

                }
                i++;
                compQuestion.textContent = "";
                // timeleft = timeleft + 2;
                if (i === questions.length) {
                    counter.style.display = "none";

                    myScore();
                } else {
                    questionGen();
                }
                console.log(i);
                console.log(questions.length);


                // }, 2000)
            }, 0000)

        }
        else {
            element.style.backgroundColor = "red";
            timeleft = timeleft - 5;
        }
    }
});


function myScore() {
    submitBtn.style.display = "inline-block";
    nameInput.style.display = "inline-block";
    nameInput.value = "";
    question.innerHTML = "You're Score: <br />" + timeleft;
}




// function getHighScore() {

//     var users = JSON.parse(localStorage.getItem("userScore"));
    // userScore.push(users);
    // if (users !== null)  {
    //     userScore = users;
    // }
    // console.log(storedNames.name);
// }


// function highScoreList() {
//     console.log(userScore);
    // for (var i = 0; i < userScore.length; i++) {
    //     var li = document.createElement("li");
    //     li.textContent = userScore.name;
    //     highScoreList.appendChild(li);
        
        // var li = document.createElement("li");
        // li.textContent = userScore.score;
        // highScoreList.appendChild(li);

    // }
// }
function storeHighScore() {
    scores = {name: nameInput.value.trim(), score: timeleft + 1 };
    userScore.push(scores);
    userScore.sort(function (a, b) {return b.score - a.score});
    localStorage.setItem("userScore", JSON.stringify(userScore));
    // highScoreList();
    for (var x = 0; x < userScore.length; x++) {
        var li = document.createElement("li");
        li.textContent = userScore[x].name;
        highScoreList.appendChild(li);

        var li2 = document.createElement("li");
        li2.textContent = userScore[x].score;
        highScoreList.appendChild(li2);
        }
        highScoreList.style.display = "inline-block";
    console.log(scores);
    console.log(userScore);
}



startBtn.addEventListener("click", function () {
    startTimer();
    questionGen();
    startBtn.style.display = "none";
    highScoreBtn.style.display = "none";
});

submitBtn.addEventListener("click", function (event) {
    // event.defaultPrevented;
    if (nameInput === "") {
        return;
    }
    i = 0;
    storeHighScore();
    
    question.textContent = "Top 10 High Scores"
    submitBtn.style.display = "none";
    nameInput.style.display = "none";
    question.innerText = "Play again?";
    startBtn.style.display = "inline-block";
    highScoreBtn.style.display = "inline-block";
    timeleft = 75;

        
        
});






