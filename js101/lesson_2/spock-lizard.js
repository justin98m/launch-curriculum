const readline = require("readline-sync");
const MAX_ABBREVIATION_LENGTH = 2;
const VALID_WORD_CHOICES = ['rock','paper','scissors','spock','lizard'];
const VALID_ABBREVIATION_CHOICES = ['sp','r','sc','l','p'];
const MAX_WINS = 3;
let playerWins = 0;
let computerWins = 0;


function prompt (message) {
  console.log(`=> ${message}`);
}
function isAbbreviation (choice) {
  return choice.length <= MAX_ABBREVIATION_LENGTH;
}
function convertAbbreviation (choice) {
  switch (choice) {
    case 'sp':
      return 'spock';
    case 'r':
      return 'rock';
    case 'sc':
      return 'scissors';
    case 'l':
      return 'lizard';
    case 'p':
      return 'paper';
  }
}
function addWin (handWinner) {
  if (handWinner === true) {
    playerWins++;
  } else if (handWinner === false) {
    computerWins++;
  }
}
function decideMatchWinner () {
  if (playerWins ===  MAX_WINS) {
    displayMatchWinner('player');
    return true;
  } else if (computerWins === MAX_WINS) {
    displayMatchWinner('computer');
    return true;
  }
  //no winner can be decded yet
  return false;
}
//returns true for a user win, false for a cpu win and "tie"
function decideWinningHand (choice,computerChoice) {
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
function verifyInput (choice) {
  while (!VALID_WORD_CHOICES.includes(choice) && !VALID_ABBREVIATION_CHOICES.
    includes(choice)) {
    prompt(`${choice} is not a valid response`);
    prompt(`Choose rock(r), paper(p), scissors(sc), spock(sp) or lizard(l)`);
    choice = readline.question().toLowerCase();
  }
  return choice;
}
function displayMatchWinner (winner) {
  if (winner === 'player') {
    prompt("You win the Match!");
  } else {
    prompt("The Computer wins this match");
  }
}
function displayWinningHand (winner) {
  if (winner === true) {
    prompt("You win this hand!");
  } else if (winner === false) {
    prompt("The Computer wins this hand");
  } else {
    prompt("It's a tie");
  }
}
function playAgain() {
  prompt('Would you like to play again(y/n)\n');
  let playAnother = readline.question().toLowerCase();
  while (playAnother !== 'n' && playAnother !== 'y') {
    prompt('Please enter y or n\n');
    playAnother = readline.question().toLowerCase();
  }
  if (playAnother === 'n') {
    return false;
  }
  return true;
}
while (true) {
  prompt("Let's Play rock, paper, scissors, spock , lizard. Best of 5");
  prompt(`Choose rock(r) , paper(p), scissors(sc) , spock(sp) or lizard(l)\n`);
  let choice = readline.question().toLowerCase();
  choice = verifyInput(choice);
  if (isAbbreviation(choice)) {
    choice = convertAbbreviation(choice);
  }

  let randomIndex = Math.floor(Math.random() * VALID_WORD_CHOICES.length);
  let computerChoice = VALID_WORD_CHOICES[randomIndex];

  prompt(`Your Choice : ${choice}`);
  prompt(`Computer's Choice : ${computerChoice}\n`);
  let handWinner = decideWinningHand(choice,computerChoice);
  displayWinningHand(handWinner);
  addWin(handWinner);
  prompt(`Your Wins ${playerWins} \n CPU Wins ${computerWins}\n`);

  if (decideMatchWinner()) {
    let playAnother = playAgain();
    if (!playAnother) {
      break;
    } else {
      playerWins = 0;
      computerWins = 0;
    }

  }

}
