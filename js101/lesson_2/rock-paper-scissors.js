const readline = require("readline-sync");
const VALID_CHOICES = ['rock','paper','scissors'];

function prompt (message) {
  console.log(`=> ${message}`);
}
function displayWinner(choice,computerChoice){
  if ((choice === 'rock' && computerChoice === 'paper') ||
    (choice === 'paper' && computerChoice === 'scissors') ||
    (choice === 'scissors' && computerChoice === 'rock')) {
    prompt('The computer wins!');
  } else if ((choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else {
    prompt("It's a tie!");
  }
}
while (true) {
  prompt(`Choose ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt(`${choice} is not a valid response`);
    prompt(`Choose rock, paper or scissors`);
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`Your Choice : ${choice}`);
  prompt(`Computer's Choice : ${computerChoice}\n`);
  displayWinner(choice,computerChoice);

  prompt('Would you like to play again(y/n)');
  let playAgain = readline.question().toLowerCase();
  while (playAgain !== 'n' && playAgain !== 'y') {
    prompt('Please enter y or n');
    playAgain = readline.question().toLowerCase();
  }
  if (playAgain === 'n') break;
}
