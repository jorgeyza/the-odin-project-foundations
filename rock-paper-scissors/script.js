let playerSelection;
let computerSelection;
let message;
let computerWins;
let playerWins;
let round;
let winner;

// DOM SELECTORS
const playerChoice = document.querySelector('#player1-choice');
const computerChoice = document.querySelector('#player2-choice');
const playerScore = document.querySelector('#player1-score');
const computerScore = document.querySelector('#player2-score');
const winnerText = document.querySelector('.messagezone__winner');
const messageText = document.querySelector('.messagezone__message');
const roundText = document.querySelector('.round-number');
const roundFullText = document.querySelector('.round');
const playerIcon = document.querySelector('#player1-choice');
const computerIcon = document.querySelector('#player2-choice');
const restartButton = document.querySelector('.button--restart');
const buttons = document.querySelectorAll('.electionzone .button');

function computerPlay() {
  const options = ['Rock', 'Paper', 'Scissors'];
  const min = 0;
  const max = 3;
  const randomNumber = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  return options[randomNumber];
}

function formatPlayerSelection(playerSelection) {
  return playerSelection
    .split(' ')
    .map(
      ([firstChar, ...rest]) =>
        firstChar.toUpperCase() + rest.join('').toLowerCase()
    )
    .join(' ');
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case 'Rock':
      switch (computerSelection) {
        case 'Rock':
          message = `It's a Draw`;
          winner = 'Nothing happens...';
          break;

        case 'Paper':
          computerWins++;
          message = `You Lose! Paper beats Rock`;
          winner = 'Computer wins!';
          break;

        case 'Scissors':
          playerWins++;
          message = `You Win! Rock beats Scissors`;
          winner = 'Player wins!';
          break;

        default:
          return;
      }
      break;
    case 'Paper':
      switch (computerSelection) {
        case 'Rock':
          playerWins++;
          message = `You Win! Paper beats Rock`;
          winner = 'Player wins!';
          break;

        case 'Paper':
          message = `It's a Draw`;
          winner = 'Nothing happens...';
          break;

        case 'Scissors':
          computerWins++;
          message = `You Lose! Scissors beats Paper`;
          winner = 'Computer wins!';
          break;

        default:
          return;
      }
      break;

    case 'Scissors':
      switch (computerSelection) {
        case 'Rock':
          computerWins++;
          message = `You Lose! Rock beats Scissors`;
          winner = 'Computer wins!';
          break;

        case 'Paper':
          playerWins++;
          message = `You Win! Scissors beats Paper`;
          winner = 'Player wins!';
          break;

        case 'Scissors':
          message = `It's a Draw`;
          winner = 'Nothing happens...';
          break;

        default:
          return;
      }
      break;
    default:
      return;
  }

  return message;
}

function playGame() {
  buttons.forEach((button) => {
    button.addEventListener('click', function startGame() {
      if (round === 5) {
        restartButton.classList.add('active');
        roundFullText.textContent = 'Finished!';
        if (playerWins > computerWins) {
          winnerText.textContent = 'Player wins!';
          messageText.textContent = 'CONGRATULATIONS!';
        }

        if (playerWins < computerWins) {
          winnerText.textContent = 'Computer wins!';
          messageText.textContent = 'TRY AGAIN!';
        }

        if (playerWins === computerWins) {
          winnerText.textContent = 'Nobody wins...';
          messageText.textContent = 'TRY AGAIN!';
        }
        return;
      }
      console.log(message);
      console.log(computerWins);
      console.log(playerWins);
      console.log(round);
      round++;
      computerSelection = computerPlay();
      playerSelection = formatPlayerSelection(this.id);
      playRound(playerSelection, computerSelection);
      playerIcon.src = playerIcon.src.replace(
        /Rock|Scissors|Paper/g,
        playerSelection
      );
      computerIcon.src = computerIcon.src.replace(
        /Rock|Scissors|Paper/g,
        computerSelection
      );
      messageText.textContent = message;
      roundText.textContent = round;
      playerScore.textContent = playerWins;
      computerScore.textContent = computerWins;
      winnerText.textContent = winner;
    });
  });
}

restartButton.addEventListener('click', function () {
  window.location.reload(true);
});

function initGame() {
  restartButton.classList.remove('active');
  message = `LET'S START`;
  computerWins = 0;
  playerWins = 0;
  round = 1;
  winner = 'WHO WILL WIN?';
  messageText.textContent = message;
  computerScore.textContent = computerWins;
  playerScore.textContent = playerWins;
  roundText.textContent = round;
  winnerText.textContent = winner;
  playGame();
}

initGame();
