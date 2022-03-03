function computerPlay() {
  options = ["rock", "paper", "scissors"]
  return options[Math.floor(Math.random() * options.length)]
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay()
  playerSelection = prompt('Give a chance:').toLowerCase()

  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return ('You win! Rock beats Scissors!')
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return ('You win! Paper beats Rock!')
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return ('You win! Scissors beats Paper!')
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'paper' || playerSelection === 'rock' && computerSelection === 'rock') {
    return ('Draw')
  } else
    return ('You lose!')
}

console.log(playRound())