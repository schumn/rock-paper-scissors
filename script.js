let playerScore = 0

let computerScore = 0

function computerPlay() {
  options = ["rock", "paper", "scissors"]
  return options[Math.floor(Math.random() * options.length)]
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay()
  playerSelection = prompt('Give a chance:').toLowerCase()

  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++
    return ('You win! Rock beats Scissors!')

  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++
    return ('You win! Paper beats Rock!')

  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++
    return ('You win! Scissors beats Paper!')

  } else if (playerSelection === 'scissors' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'paper' || playerSelection === 'rock' && computerSelection === 'rock') {
    return ('Draw')

  } else
    computerScore++
  return ('You lose!')
}

function game() {
  for (let i = 1; i <= 5; i++) {
    console.log(`Game ${i}: ${playRound()}`)
  }
  if (playerScore > computerScore) {
    console.log(`You win the game! ${playerScore} x ${computerScore}`)
  } else {
    console.log(`You lose the game! ${playerScore} x ${computerScore}`)
  }
}