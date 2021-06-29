// import functions and grab DOM elements

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
const submitBtn = document.getElementById('quiz-start');

submitBtn.addEventListener('click', ()=> {
    const confirmed = confirm('Are you ready to begin?');
    console.log(confirmed);
    if (confirmed){
        const name = prompt('What is your name?');
        const ans1 = prompt('x');
        const ans2 = prompt('y');
        const ans3 = prompt('z');
        console.log(name, ans1, ans2, ans3);
        let score = 0;
        if (ans1 === 'y' || ans1 === 'YES' || ans1 === 'yassss' || ans1 === 'yes'){
            score ++;
        }
        if (ans1 === 'y' || ans1 === 'YES' || ans1 === 'yassss'){
            score ++;
        }
        if (ans1 === 'y' || ans1 === 'YES' || ans1 === 'yassss'){
            score ++;
        }
    }
    else {
        console.log('come back soon');
    }
});