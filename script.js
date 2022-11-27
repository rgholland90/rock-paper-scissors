function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function getPlayerChoice() {
  return prompt("Choose your weapon: ");
}

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection[0].toUpperCase() +
    playerSelection.substring(1).toLowerCase();

  if (playerSelection === computerSelection) {
    return console.log(`Tie. Both players selected ${playerSelection}.`);
  }

  if (playerSelection === "Rock") {
    return computerSelection === "Paper"
      ? loseRound(playerSelection, computerSelection)
      : winRound(playerSelection, computerSelection);
  }

  if (playerSelection === "Paper") {
    return computerSelection === "Scissors"
      ? loseRound(playerSelection, computerSelection)
      : winRound(playerSelection, computerSelection);
  }

  if (playerSelection === "Scissors") {
    return computerSelection === "Rock"
      ? loseRound(playerSelection, computerSelection)
      : winRound(playerSelection, computerSelection);
  }
}

function loseRound(playerSelection, computerSelection) {
  console.log(
    `You lose. Computer's ${computerSelection} beat your ${playerSelection}.`
  );
  computerScore++;
}

function winRound(playerSelection, computerSelection) {
  console.log(
    `You win. Your ${playerSelection} beat computer's ${computerSelection}.`
  );
  playerScore++;
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(getPlayerChoice(), getComputerChoice());
  }

  console.log(
    `Final Score:\nComputer: ${computerScore}\nPlayer: ${playerScore}`
  );
}

let computerScore = 0;
let playerScore = 0;
game();
