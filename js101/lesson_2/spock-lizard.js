const readline = require("readline-sync");
const VALID_CHOICES = ['rock','paper','scissors','spock','lizard'];

function prompt (message) {
  console.log(`=> ${message}`);
}
//returns true for a user win, false for a cpu win and "tie"
function decideWinner (choice,computerChoice) {
  if (choice === computerChoice) {
    return "tie";
  }
  switch (choice) {
    case 'rock':
      return playerHasRock(computerChoice);
    case 'paper':
      return playerHasPaper(computerChoice);
    case 'scissors':
      return playerHasScissors(computerChoice);
    case 'spock':
      return playerHasSpock(computerChoice);
    case 'lizard':
      return playerHasLizard(computerChoice);
  }
}

function playerHasRock (computerChoice) {
  if (computerChoice === "scissors" || computerChoice === "lizard") return true;
  return false;
}
function playerHasPaper (computerChoice) {
  if (computerChoice === "rock" || computerChoice === "spock") return true;
  return false;
}
function playerHasScissors (computerChoice) {
  if (computerChoice === "paper" || computerChoice === "Lizard") return true;
  return false;
}
function playerHasSpock (computerChoice) {
  if (computerChoice === "scissors" || computerChoice === "rock") return true;
  return false;
}
function playerHasLizard (computerChoice) {
  if (computerChoice === "paper" || computerChoice === "spock") return true;
  return false;
}

function displayWinner (winner) {
  if (winner === true) {
    prompt("You win!");
  } else if (winner === false) {
    prompt("The Computer Wins");
  } else {
    prompt("It's a tie");
  }
}
while (true) {
  prompt(`Choose ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt(`${choice} is not a valid response`);
    prompt(`Choose rock, paper, scissors, spock or lizard`);
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`Your Choice : ${choice}`);
  prompt(`Computer's Choice : ${computerChoice}\n`);
  let winner = decideWinner(choice,computerChoice);
  displayWinner(winner);
  prompt('Would you like to play again(y/n)');
  let playAgain = readline.question().toLowerCase();
  while (playAgain !== 'n' && playAgain !== 'y') {
    prompt('Please enter y or n');
    playAgain = readline.question().toLowerCase();
  }
  if (playAgain === 'n') break;
}
