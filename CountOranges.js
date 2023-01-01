    
 //  elements 
 
 const  orangesDiv = document.querySelector(`#oranges`);
 const  orangesDivSpans = document.querySelectorAll(`#oranges span`);
 const  devidedBy = document.querySelector(`#devided-by`);
// const  answerInput = document.querySelector(`.answer-input`);
 const  questionBoard = document.querySelector(`#question-board`);
 const  resultsBoard = document.querySelector(`#results-board`);
 const  resultDiscreption = document.querySelector(`#result-discreption`);
 const  resultedOrangesDiv = document.querySelector(`#resulted-oranges`);
 const  submitBtn = document.querySelector(`#submit`);
 const revealResult = document.querySelector(`.reveal-result`);
 const  rightWrong = document.querySelector(`#right-wrong`);
 const  almost = document.querySelector(`#almost`);
 const showAnswer = document.querySelector(`#show-answer`);
 const toggleAnswerWord = document.querySelector(`#toggle-answer`);
 const rightAnswerSpan = document.querySelector(`#right-answer`);
 const revealMyInfoBtn = document.querySelector(`.reveal-my-info`);
 const haseebDiv = document.querySelector(`.haseeb`);
 const media = window.matchMedia(`(max-width : 767px)`)
 
 const flashAnswer = document.querySelector(`#flash-answer`);
 const plusHalve = document.querySelector(`#plus-halve`);
 
 
 // Create spans a number of times 
 let randomNumber = Math.trunc(Math.random() * 10) +1 
  
  
 let orangeSpan = '<span> 🍊 </span>'.repeat(randomNumber)
 orangesDiv.innerHTML = `${orangeSpan}` // replaces  html in the html file 
  
// devided by random num
 let devidedByRandomNum = Math.trunc(Math.random() * 10 < randomNumber ) +1

 devidedBy.textContent = `${devidedByRandomNum}`



/*

// RESET
const resetBtn = document.querySelector(`#reset`);
resetBtn.addEventListener(`click`, function() {
   randomNumber = Math.trunc(Math.random() * 10) +1
 
 let orangeSpan = '<span> 🍊 </span>'.repeat(randomNumber)
 orangesDiv.innerHTML = `${orangeSpan}` // replaces  html in the html file  
 
// devided by random num
  devidedByRandomNum = Math.trunc(Math.random() * 10 < randomNumber ) +1
devidedBy.textContent = `${devidedByRandomNum}`


console.log (`new random`, )
})

*/

// right answer
// const rightAnswer =  orangesDivSpans.length / devidedBy.textContent
/*
this way the text content of the span returns plus one , 

*/
let rightAnswer =  randomNumber / devidedByRandomNum
// rightAnswer +=  ".5"
rightAnswerSpan.textContent = `${rightAnswer}`





orangesDivSpans.forEach( ods => { 
  ods.style.border = '1px solid red'
  ods.addEventListener(`click`, function() {
   /* console.log('span clicked')
    console.log( orangesDivSpans.indexof(`${this}`))
    ods.style.border = ' 1px solid red'*/
  })
 })

 
 // const answerInputValue = answerInput.value
 //console.log(answerInputValue)
 // functions 
 
/* const expandAnswerHolder = function () {
  console.log (`cliked`)
  showAnswer.classList.toggle(`toggle-answer`)
}*/

showAnswer.addEventListener(`click`, function () {
  
  showAnswer.classList.toggle(`toggle-answer`);
  showAnswer.classList.contains(`toggle-answer`) ?   toggleAnswerWord.innerText = "Hide" :    toggleAnswerWord.innerText = "Show" ;
 })
//  REVEAL MY INFO 

 revealMyInfoBtn.addEventListener(`click`, function () {
  haseebDiv.classList.toggle(`reveal-info`)
  revealMyInfoBtn.classList.toggle(`fa-caret-down`)
 })



/*********************************************/

if (!media.matches) {
// reveal results btn looks right in desktop version
revealResult.classList.remove(`fa-square-caret-down`) 
revealResult.classList.add(`fa-square-caret-right`)

// const guess = Number(document.querySelector('.guess').value);
/*const revealResults = function() {
  questionBoard.classList.add(`qb-Transform`)
  resultsBoard.classLisr.add(`rb-Tranform`)
}*/



 // REVEAL RESULT

    revealResult.addEventListener(`click`, function() {
  
 
      questionBoard.classList.toggle(`qb-Transform`)
      resultsBoard.classList.toggle(`rb-Transform`)
      revealResult.classList.toggle(`rotate-reveal-result`)
      if (revealResult.classList.contains(`rotate-reveal-result`) && rightWrong.textContent == "Wrong" ) {
          showAnswer.classList.remove(`displayNone`);
      } else {
          showAnswer.classList.add(`displayNone`);
      }
       
})
    





// SUBMIT BTN 

submitBtn.addEventListener('click', function () {
  
  const guess = Number(document.querySelector('.guess').value); 
  
  let resultedOrangesSpans = '<span> 🍊 </span>'.repeat(guess)
  resultedOrangesDiv.innerHTML = `${resultedOrangesSpans}`
  
  
  questionBoard.classList.add(`qb-Transform`)
  resultsBoard.classList.add(`rb-Transform`)
  revealResult.classList.add(`rotate-reveal-result`)
  /*console.log (guess);*/
  // answers are returned as strings , so loose equality using is a must
  if ( guess == rightAnswer ) {     
    rightWrong.textContent = "Right"
    rightWrong.style.color = "#387C60"
     showAnswer.classList.add(`displayNone`)
     resultDiscreption.textContent= "Yes indeed each one takes"
     almost.classList.add(`displayNone`)
     resultDiscreption.style.color = "black"
     // if no answer inserted 
  } else if ( guess == 0 ) {
      resultDiscreption.textContent= "Insert a valid value" 
      resultDiscreption.style.color = "red"
  } 
  
  else {
      rightWrong.textContent = "Wrong" 
      rightWrong.style.color = "red"
      showAnswer.classList.remove(`displayNone`)
      resultDiscreption.textContent = "Try a little harder, each one doesn't take";
      almost.classList.add(`displayNone`)
      resultDiscreption.style.color = "black"
  } 
  
 })
 
 
 }


// RESPONSIVINESS 

const responsive = function (media) {
    if (media.matches) {
        
  
  
  
  
  
  
  
  // choose answer
      const chooseAnswer=document.querySelectorAll(`#choose-answer-spans span`);
 let halve = 0;    
     chooseAnswer.forEach( ca => {
     
         // by cliking on any of the numbers 
        ca.addEventListener(`click`, function() { 
        halve = 0;  
        // disable the activation of all others 
         chooseAnswer.forEach( ca => {ca.classList.remove(`active`)
             halve = 0;  
             })
         // and activate only this
        ca.classList.add(`active`) 
        
       console.log (ca.innerText)
          caValue =  Number(ca.innerText)
          console.log (caValue, typeof caValue)
         console.log (caValue)
         console.log (halve, `ca clicking event`)                 
        
         
         
         // start plusHalve event 
         // by cliking on plusHalve btn
         
         plusHalve.addEventListener(`click`, function() {
         // choose the active number element
     if (ca.classList.contains(`active`)) {        
             // increase its value by a halve 
          
           halve = 0; 
           console.log (halve, `plusHalve Btn`)  
           halve =  0.5;
           caValue+= halve;
           ca.innerText = caValue
           flashAnswer.textContent = caValue
      
      
       
        flashAnswer.classList.remove(`displayNone`)
        setTimeout(hideFlashAnswer,500)
      }
        }) // end plusHalve event 
        
         
         chooseAnswer.forEach( caStyling=>{caStyling.classList.remove(`reveal-choosen-answer`)
        })
        
        ca.classList.add(`reveal-choosen-answer`)
        
        flashAnswer.innerText =  caValue
        flashAnswer.classList.remove(`displayNone`)
        
      const hideFlashAnswer = function(){        
            flashAnswer.classList.add(`displayNone`)
              }
              
        setTimeout(hideFlashAnswer,500)
        
        
        
        //////////
        
        submitBtn.addEventListener('click', function () {
        let resultedOrangesSpans = '<span> 🍊 </span>'.repeat(caValue)
  resultedOrangesDiv.innerHTML = `${resultedOrangesSpans}`
  
  
  questionBoard.classList.add(`qb-Transform-mobile`)
  resultsBoard.classList.add(`rb-Transform-mobile`)
  revealResult.classList.add(`rotate-reveal-result-mobile`)
  
          
          if ( caValue == rightAnswer ) {     
    rightWrong.textContent = "Right"
    rightWrong.style.color = "#387C60"
     showAnswer.classList.add(`displayNone`)
     resultDiscreption.textContent= "Yes indeed each one takes"
     almost.classList.add(`displayNone`)
     resultDiscreption.style.color = "black"
     // if no answer inserted 
  } else if ( caValue == 0 ) {
      resultDiscreption.textContent= "Insert a valid value" 
      resultDiscreption.style.color = "red"
  } 
  
  else {
      rightWrong.textContent = "Wrong" 
      rightWrong.style.color = "red"
      showAnswer.classList.remove(`displayNone`)
      resultDiscreption.textContent = "Try a little harder, each one doesn't take";
      almost.classList.add(`displayNone`)
      resultDiscreption.style.color = "black"
  } // end if guess
          
          
        
       }) // end submitt
  
 }) // end ca event
        
        
     }) // end ca forEach
  
   
  
  
  
 
 


revealResult.addEventListener(`click`, function() {
   // by clicking reveal results button
  
      questionBoard.classList.toggle(`qb-Transform-mobile`)
      resultsBoard.classList.toggle(`rb-Transform-mobile`)
      revealResult.classList.toggle(`rotate-reveal-result-mobile`)
      // by pressing reveal result to above hide answer div if its wrong and 
      if (revealResult.classList.contains(`rotate-reveal-result-mobile`) && rightWrong.textContent == "Wrong" ) {
          showAnswer.classList.remove(`displayNone`);
      } else {
          showAnswer.classList.add(`displayNone`);
      }
                              
      }) // end reveal results
      
      
      
           
    } // end if
} // end matchMedia()


responsive(media)


//  still you want oranges to be halved if the result is a value and a halve  








 
/*
 // NOTES 

* if there are same rukes in different media i think you need to uses 
if not this media then if this media 

** global ruels and functions are but outside 
** the code inside forEach methide is applied for all the elements , if we would like to do some logic operations to only a specific element we need
to give it a class active after rmoving this class from all the others ,then inside this element's event use if contains class active do that. briefly,  make the current element outweighs the others by being privilged with the active class ;

 // BUGS
 each time the ca element is pressed again tge hakve value is increased by hakve , for ex uf the number 1 is pressed for the third time it increases by 1.5 not 0.5 *
*/

/*






const chooseAnswer=document.querySelectorAll(`#choose-answer-spans span`);
  
     chooseAnswer.forEach( ca => {
     
         
        ca.addEventListener(`click`, function() {        
       console.log (ca.textContent)
          caValue =  Number(ca.textContent)
          console.log (typeof caValue)
         console.log (caValue)
          chooseAnswer.forEach( caStyling=>{caStyling.classList.remove(`reveal-choosen-answer`)
        })
        
        ca.classList.add(`reveal-choosen-answer`)
        
        flashAnswer.innerText =  caValue
        flashAnswer.classList.remove(`displayNone`)
        
      const hideFlashAnswer = function(){        
            flashAnswer.classList.add(`displayNone`)
              }
              
        setTimeout(hideFlashAnswer,500)
        
        plusHalve.addEventListener(`click`, function() {
           
           caValue+= 0.5;
           ca.textContent = caValue
           flashAnswer.textContent = caValue
      
      
       
        flashAnswer.classList.remove(`displayNone`)
        setTimeout(hideFlashAnswer,500)
      
        })
        
        //////////
        
        submitBtn.addEventListener('click', function () {
        let resultedOrangesSpans = '<span> 🍊 </span>'.repeat(caValue)
  resultedOrangesDiv.innerHTML = `${resultedOrangesSpans}`
  
  
  questionBoard.classList.add(`qb-Transform-mobile`)
  resultsBoard.classList.add(`rb-Transform-mobile`)
  revealResult.classList.add(`rotate-reveal-result-mobile`)
  
          
          if ( caValue == rightAnswer ) {     
    rightWrong.textContent = "Right"
    rightWrong.style.color = "#387C60"
     showAnswer.classList.add(`displayNone`)
     resultDiscreption.textContent= "Yes indeed each one takes"
     almost.classList.add(`displayNone`)
     resultDiscreption.style.color = "black"
     // if no answer inserted 
  } else if ( caValue == 0 ) {
      resultDiscreption.textContent= "Insert a valid value" 
      resultDiscreption.style.color = "red"
  } 
  
  else {
      rightWrong.textContent = "Wrong" 
      rightWrong.style.color = "red"
      showAnswer.classList.remove(`displayNone`)
      resultDiscreption.textContent = "Try a little harder, each one doesn't take";
      almost.classList.add(`displayNone`)
      resultDiscreption.style.color = "black"
  } // end if guess
          
          
        }) // end ca event
       }) // end submitt
  
     }) // end ca forEach
  
  
  
  
  
  */
