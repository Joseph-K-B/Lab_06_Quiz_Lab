// import functions and grab DOM elements

import { isYes, isNo } from './utils.js';

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

// const confirmed = confirm('Hello');
// console.log(confirmed);

// const myName = prompt('What is your name?');
// console.log(myName);

//get button element
//add  'click' eventListener
// confirm the user wants to start the  quiz
// if they do --- prompt for at least three questions and store answer
// for each answer check the user entered a correct value
// track number of correct answers
// at the end of the quiz, update the results section with # of correct answers
const submitBtn = document.getElementById('quiz-button');
const results = document.getElementById('results');

submitBtn.addEventListener('click', ()=> {
    const confirmed = confirm('Are you ready to begin?');
    console.log(confirmed);
    if (confirmed){
        const name = prompt('What is your name?');
        const ans1 = prompt('Do I wanna chase cars?');
        const ans2 = prompt('Can i fit in your lap?');
        const ans3 = prompt('Do I like to nap?');
        const ans4 = prompt('Am I a good dog?');
        const ans5 = prompt('Do I like to eat too much?');
        const ans6 = prompt('Am I getting old?');
        const ans7 = prompt('Am I neglected?');
        const ans8 = prompt('Do i act like it?');

        console.log(name, ans1, ans2, ans3, ans4, ans5, ans6);
        let score = 0;


        if (isYes(ans1)){ score++;
        }

        console.log ('points:', score);

        if (isNo(ans2)){ score++;
        }

        console.log('points:', score);

        if (isYes(ans3)){ score++;
        }
        
        console.log('points:', score);

        if (isYes(ans4)){ score++;
        }

        console.log('points:', score);
        
        if (isYes(ans5)){ score++;
        }

        console.log('points:', score);
        
        if (isYes(ans6)){ score++;
        }

        console.log('points', score);

        if (isNo(ans7)){ score++;
        }

        console.log('points:', score);

        if (isYes(ans8)){ score++;
        }

        console.log('points:', score);




        results.textContent = `${name} you got ${score}/8 right!`;
        console.log('Final Score', score, '/8');
    }
    else {
        console.log('come back soon');
    }
});