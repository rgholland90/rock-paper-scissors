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
    console.log(`Tie. Both players selected ${playerSelection}.`);
    return "";
  }

  if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      loseRound(playerSelection, computerSelection);
      return "computer";
    } else {
      winRound(playerSelection, computerSelection);
      return "player";
    }
  }

  if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      loseRound(playerSelection, computerSelection);
      return "computer";
    } else {
      winRound(playerSelection, computerSelection);
      return "player";
    }
  }

  if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      loseRound(playerSelection, computerSelection);
      return "computer";
    } else {
      winRound(playerSelection, computerSelection);
      return "player";
    }
  }
}

function loseRound(playerSelection, computerSelection) {
  console.log(
    `You lose. Computer's ${computerSelection} beat your ${playerSelection}.`
  );
}

function winRound(playerSelection, computerSelection) {
  console.log(
    `You win. Your ${playerSelection} beat computer's ${computerSelection}.`
  );
}

function game() {
  let computerScore = 0;
  let playerScore = 0;
  let winner = "";

  for (let i = 0; i < 5; i++) {
    winner = playRound(getPlayerChoice(), getComputerChoice());
    if (winner === "player") playerScore++;
    if (winner === "computer") computerScore++;
  }

  console.log(
    `Final Score:\nComputer: ${computerScore}\nPlayer: ${playerScore}`
  );
}

game();
