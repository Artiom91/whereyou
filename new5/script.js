'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

const displayGuessMessage = function(message) {
  document.querySelector('.guess-message').textContent = message
}

document.querySelector('.check').addEventListener('click', function() {
  const guessingNumber = Number (document.querySelector('.number-input').value)
  console.log(guessingNumber, typeof guessingNumber)

  if (!guessingNumber) {

    if (score > 1) {
      displayGuessMessage('Введите число!')
      score--
      document.querySelector('.score').textContent = score
    } else {
      displayGuessMessage('Вы проиграли!')
      document.querySelector('.score').textContent = '0'
    }

  }  else if (guessingNumber === secretNumber) {
    displayGuessMessage('Правильно!')
    document.querySelector('.question').textContent = secretNumber
    document.querySelector('body').style.backgroundColor = '#02d902'
    document.querySelector('.question').style.width = '50rem'

    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = score
    }
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent =
        guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!'
      score--
      document.querySelector('.score').textContent = score
    } else {
      displayGuessMessage('Вы проиграли!')
      document.querySelector('.score').textContent = '0'
    }

  }
})



document.querySelector('.again').addEventListener('click', function() {

  secretNumber = Math.trunc(Math.random() * 20) + 1
  score = 20

  document.querySelector('.question').textContent = '???'
  document.querySelector('.question').style.width = '25rem'
  document.querySelector('body').style.backgroundColor = '#000'
  displayGuessMessage('Начни угадывать')
  document.querySelector('.score').textContent = score
  document.querySelector('.number-input').value = ''
})