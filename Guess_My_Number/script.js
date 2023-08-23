'use strict';

// *LOGIC BUILDING*
// if the number entered by player is same as the number behind question mark - then player wins
// if score becomes 0 then player lose the game

// 1. number entered -> got it!
// 2. the number behind the question mark???? - got it
// 3. edge case->if user entered nothing

// LOGIC 1 - GET THE NUMBERS
let secretNumber = Math.trunc(Math.random() * 20) + 1;


// LOGIC 2 - MATCH THE NUMBERS
// change the message to be displayed according to the score
function displayMessage(msg) {
    document.querySelector('.message').textContent = msg;
}

// LOGIC 3 - CHECK FOR SCORE AND HIGHSCORE
//  score will decrease if the number entered is wrong
// but if the number entered is right , we need to increase the score by one , then we will check whether highscore < my score then we have a new highscore

// logic -
// 1. player needs to select check button -> document.q.('.check')
// 2. player needs to play the game when it is clicked

let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function() {
    const guess = document.querySelector('.guess').value;
    if (!guess) {
        displayMessage('Invalid input');
    } else if (guess == secretNumber) {
        displayMessage('You won');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }
    } else if (guess !== secretNumber) {
        guess > secretNumber ?
            displayMessage('Too high') :
            displayMessage('Too low');

        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game');
            document.querySelector('.score').textContent = 0;
        }
    }
});

// what is changing?
// color should be returned back to normal - black 
// question mark should come back again 
// score should be reset to 20 
// html input section should be empty again 
// message should change back to start playing 
// need a new random number

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    document.querySelector('body').style.backgroundColor = '#000';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    displayMessage('Start playing');
    secretNumber = Math.trunc(Math.random() * 20) + 1;
});


