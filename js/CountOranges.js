 `use strict`
 //  elements 
 
 const  questionBoard = document.querySelector(`#question-board`);
 const  resultsBoard = document.querySelector(`#results-board`);
 const revealResult = document.querySelector(`.reveal-result`);
 const showAnswer = document.querySelector(`#show-answer`);
 const toggleAnswerWord = document.querySelector(`#toggle-answer`);
 
 
 document.querySelector(`h1`).style.color = "red";
 
 
 
 // functions 
 
/* const expandAnswerHolder = function () {
 console.log (`cliked`)
   showAnswer.classList.toggle(`toggle-answer`)
 }*/
 
 showAnswer.addEventListener(`click`, function () {

   showAnswer.classList.toggle(`toggle-answer`);
   toggleAnswerWord.innerText = "Hide"
  })


/*const revealResults = function() {
    questionBoard.classList.add(`qb-Transform`)
    resultsBoard.classLisr.add(`rb-Tranform`)
}*/

revealResult.addEventListener(`click`, function() {
console.log (`button clicked`)
    questionBoard.classList.add(`qb-Transform`)
    resultsBoard.classLisr.add(`rb-Tranform`)
    
} )
