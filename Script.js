
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessesLeft = 10;
let guessHistory = [];

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const feedback = document.getElementById('feedback');
const guessList = document.getElementById('guessList');
const gameOver = document.getElementById('gameOver');


guessButton.addEventListener('click', () => {
    let userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = 'Please enter a number between 1 and 100!';
        return;
    }

    guessesLeft--;
    guessHistory.push(userGuess);

  
    if (userGuess === randomNumber) {
        feedback.textContent = 'Correct! You guessed the right number!';
        feedback.style.color = 'green';
        gameOver.textContent = 'You win!';
        gameOver.style.color = 'green';
        guessButton.disabled = true;
    } else if (userGuess > randomNumber) {
        feedback.textContent = 'Too High! Try again.';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = 'Too Low! Try again.';
        feedback.style.color = 'red';
    }


    let historyItem = document.createElement('li');
    historyItem.textContent = `Guess ${guessHistory.length}: ${userGuess}`;
    guessList.appendChild(historyItem);

    if (guessesLeft === 0 && userGuess !== randomNumber) {
        gameOver.textContent = 'Game Over! You have no guesses left.';
        gameOver.style.color = 'red';
        guessButton.disabled = true;
    }


    if (guessesLeft > 0) {
        feedback.textContent += ` You have ${guessesLeft} guesses left.`;
    }
});
