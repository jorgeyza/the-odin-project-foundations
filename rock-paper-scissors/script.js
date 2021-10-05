let message = '';
let computerWins = 0;
let playerWins = 0;

function computerPlay() {
  const options = ['Rock', 'Paper', 'Scissors'];
  const min = 0;
  const max = 3;
  const randomNumber = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  return options[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  const playerSelectionFormatted = playerSelection
    .split(' ')
    .map(
      ([firstChar, ...rest]) =>
        firstChar.toUpperCase() + rest.join('').toLowerCase()
    )
    .join(' ');

  switch (playerSelectionFormatted) {
    case 'Rock':
      switch (computerSelection) {
        case 'Rock':
          message = `It's a Draw`;
          break;

        case 'Paper':
          computerWins++;
          message = `You Lose! Paper beats Rock`;
          break;

        case 'Scissors':
          playerWins++;
          message = `You Win! Rock beats Scissors`;
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
          break;

        case 'Paper':
          message = `It's a Draw`;
          break;

        case 'Scissors':
          computerWins++;
          message = `You Lose! Scissors beats Paper`;
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
          break;

        case 'Paper':
          playerWins++;
          message = `You Win! Scissors beats Paper`;
          break;

        case 'Scissors':
          message = `It's a Draw`;
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

function game(numberOfGames) {
  let playerSelection;
  let computerSelection;
  for (let i = 0; i < numberOfGames; i++) {
    playerSelection = prompt(`Choose between: 'Rock', 'Paper', 'Scissors'`);
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(message);
    console.log(`PLAYER: ${playerWins}, COMPUTER: ${computerWins}`);
  }
}

game(5);
