const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

const handleButtonClick = (event) => {
  const player = event.target.className
  const computer = getComputerMove()
  $('figure.player img').src = `/images/${player}.svg`
  $('figure.computer img').src = `/images/${computer}.svg`

  // console.log('Player is', player)
  // console.log('Computer is', computer)

  // If the player is rock and the computer is scissors, the player wins
  if (player === 'rock' && computer === 'scissors') {
    const playerScoreText = $('.scores .player').textContent // grab text in HTML classes
    const playerScoreNumber = parseInt(playerScoreText) // change it to a number
    const newPlayerScore = playerScoreNumber + 1 // add point to score
    $('.scores .player').textContent = newPlayerScore // replaces score in HTML
    $('figure.player').className = 'player win' // adds animations but I don't know how
    // console.log('You win!')
  }

  // If the player is rock and the computer is paper, the player loses
  if (player === 'rock' && computer === 'paper') {
    const computerScoreText = $('.scores .computer').textContent
    const computerScoreNumber = parseInt(computerScoreText)
    const newComputerScore = computerScoreNumber + 1
    $('.scores .computer').textContent = newComputerScore
    $('figure.player').className = 'player lose'
    // console.log('You lose.')
  }

  // If the player is paper and the computer is rock, the player wins
  if (player === 'paper' && computer === 'rock') {
    const playerScoreText = $('.scores .player').textContent
    const playerScoreNumber = parseInt(playerScoreText)
    const newPlayerScore = playerScoreNumber + 1
    $('.scores .player').textContent = newPlayerScore
    $('figure.player').className = 'player win'
    // console.log('You win!')
  }

  // If the player is paper and the computer is scissors, the player loses
  if (player === 'paper' && computer === 'scissors') {
    const computerScoreText = $('.scores .computer').textContent
    const computerScoreNumber = parseInt(computerScoreText)
    const newComputerScore = computerScoreNumber + 1
    $('.scores .computer').textContent = newComputerScore
    $('figure.player').className = 'player lose'
  }

  // If the player is scissors and the computer is paper, the player wins
  if (player === 'scissors' && computer === 'paper') {
    const playerScoreText = $('.scores .player').textContent
    const playerScoreNumber = parseInt(playerScoreText)
    const newPlayerScore = playerScoreNumber + 1
    $('.scores .player').textContent = newPlayerScore
    $('figure.player').className = 'player win'
    // console.log('You win!')
  }

  // If the player is scissors and the computer is rock, the player loses
  if (player === 'scissors' && computer === 'rock') {
    const computerScoreText = $('.scores .player').textContent
    const computerScoreNumber = parseInt(computerScoreText)
    const newComputerScore = computerScoreNumber + 1
    $('.scores .computer').textContent = newComputerScore
    $('figure.player').className = 'player lose'
    // console.log('You lose.')
  }

  if (player === 'scissors' && computer === 'scissors' || player === 'paper' && computer === 'paper' || player === 'rock' && computer === 'rock') {
    $('figure.player').className = 'player draw'
    $('figure.computer').className = 'computer draw'
    // console.log('Draw.')
  }

  if ($('.scores .computer').textContent === '2') { // selects HTML class Text
    // console.log('computer wins')
    // This code adds a point to the winner's match score
    const computerMatchText = $('.match-score-computer .computer-score').textContent
    const computerMatchNumber = parseInt(computerMatchText)
    const newComputerMatchScore = computerMatchNumber + 1
    $('.match-score-computer .computer-score').textContent = newComputerMatchScore
    gameOver(false)
  }

  if ($('.scores .player').textContent === '2') {
    // console.log('player wins')
    const playerMatchText = $('.match-score-player .player-score').textContent
    const playerMatchNumber = parseInt(playerMatchText)
    const newPlayerMatchScore = playerMatchNumber + 1
    $('.match-score-player .player-score').textContent = newPlayerMatchScore
    gameOver(true)
  }

  // HINT: Check for win, lose or draw, then call `gameOver()` eventually.
}

const getComputerMove = () => {
  const moves = ['rock', 'paper', 'scissors']
  return moves[Math.floor(Math.random() * moves.length)]
}

// HINT: Try calling `gameOver(true)` in the console.
const gameOver = (playerDidWin) => {
  if (playerDidWin) {
    $('.dialog h3').textContent = 'You won!'
  } else {
    $('.dialog h3').textContent = 'You lost!'
  }
  $('body').className = 'modal'
}

// console.log(gameOver)

const resetGame = () => {
  // TODO: Probably need to do more to reset the game here...
  $('figure.player img').src = '/images/unknown.svg'
  $('figure.computer img').src = '/images/unknown.svg'
  $('body').className = '.dialog button'
  $('.scores .player').textContent = '0'
  $('.scores .computer').textContent = '0'
  console.log('game reset')
}

const main = () => {
  const buttons = $$('.player-input button')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick)
  }
  $('.dialog button').addEventListener('click', resetGame)
}

document.addEventListener('DOMContentLoaded', main)
