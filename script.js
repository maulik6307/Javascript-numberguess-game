let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber)


const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let preGuess = [];
let numGuess = 1;

let playGame = true;


if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validationGuess(guess);
    })
}

function validationGuess(guess){
    if(isNaN(guess) || guess < 1 || guess > 100){
        alert('Please Enter a valid number');
    }else{
        preGuess.push(guess);
        if(numGuess > 10){
            displayGuess(guess);
            displaymessage(`Game Over , Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess);
            checkGuess(guess)
        }
    }
}


function checkGuess(guess){
    if(guess === randomNumber){
        displaymessage(`You Win , Your Guess is right !!!`)
    endGame()
    }
    else if(guess<randomNumber){
        displaymessage(`Your number is Toooo Lowww`)
    }
    
    else if(guess>randomNumber){
        displaymessage(`Your number is Toooo highhh`)
    }
}


function displayGuess(guess){
    userInput.value = " ";
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
}


function displaymessage(Message){
    lowOrHi.innerHTML = `<h2>${Message}</h2>`
}


function endGame(guess){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(guess){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        preGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        displaymessage(`Further Guessing ....`)    
        playGame=true;
    })
}