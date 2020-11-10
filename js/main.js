const words = [
  'six',
  'barbarian',
  'favorable',
  'prime',
  'cattle',
  'amulet',
  'every',
  'blueprint',
  'flatness',
  'expression',
  'mad',
  'skull',
  'contemporary',
  'sharp',
  'kangaroo',
  'bamboo',
  'frustration',
  'series'
];

let state = {
  hangManProgress: 1,
};

function getRandomWord() {
  const index = Math.floor(Math.random() * Math.floor(words.length - 1));
  return words[index];
}

function containsLetter(secretWord, letter) {
  return secretWord.includes(letter);
}

function validGuess(guess) {
  return !(guess.length === 0 || guess.length > 1);
}

function getGuessBox() {
  return document.getElementById('guess-box');
}

function getValidation() {
  return document.getElementById('validation');
}

function hideValidationError() {
  const guessBox = getGuessBox();
  const validationText = getValidation();
  guessBox.classList.remove('invalid-guess');
  validationText.setAttribute('hidden', true);
}


function displayValidationError() {
  const guessBox = getGuessBox();
  const validationText = getValidation();
  guessBox.classList.add('invalid-guess');
  validationText.removeAttribute('hidden');
}

function isRoomToContinue() {
  return state.hangManProgress < 6;
}

function continueHangingProcess() {
  state.hangManProgress += 1;
  const hangmanContainer = document.getElementById('hangman-container');
  hangmanContainer.innerHTML = `<img src="img/hangman_${state.hangManProgress}.jpg" alt="hangman_${state.hangManProgress}">`;
}

function showNewLetter(secretWord, guess) {
  const letterBoxes = document.querySelectorAll('.letter-box');

  for (let i = 0; i < secretWord.length; i++) {
    if (secretWord[i] === guess) {
      letterBoxes[i].innerText = guess;
    }
  }
}

function isVictoryCondition() {
  const letterBoxes = document.querySelectorAll('.letter-box');
  for (const letterBox of letterBoxes) {
    if (letterBox.innerText !== '_') {
      continue;
    }
    return false;
  }
  return true;
}

function gameOver(secretWord) {
  alert(`Game Over. The word was ${secretWord}`);
  location.reload();
}

function win() {
  alert('You win! Congrats!');
  location.reload();
}

function renderLetterBoxes(secretWord) {
  const letterBoxContainer = document.getElementById('letter-box-container');

  for (const letter of secretWord) {
    const letterBox = document.createElement('div');
    letterBox.classList.add('letter-box');
    letterBox.innerText = '_';
    letterBoxContainer.appendChild(letterBox);
  }
}

function initEventListeners(secretWord) {
  const guessButton = document.querySelector('#guess-button');
  guessButton.addEventListener('click', (e) => {
    e.preventDefault();

    const guessInput = document.querySelector('#guess-box');
    const guess = guessInput.value;

    if (validGuess(guess)) {
      hideValidationError();

      if (containsLetter(secretWord, guess)) {
        showNewLetter(secretWord, guess);

        if (isVictoryCondition()) {
          win();
        }
      }
      else {
        continueHangingProcess();

        if (!isRoomToContinue()) {
          gameOver(secretWord);
        }
      }
    }
    else {
      displayValidationError();
    }
    guessInput.value = '';
  });
}

function main() {
  const secretWord = getRandomWord();
  renderLetterBoxes(secretWord);
  initEventListeners(secretWord);
}

main();
