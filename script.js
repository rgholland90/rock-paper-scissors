function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection[0].toUpperCase() +
    playerSelection.substring(1).toLowerCase();

  if (playerSelection === computerSelection) {
    return `Tie. Both players selected ${playerSelection}.`;
  }

  if (playerSelection === "Rock") {
    return computerSelection === "Paper"
      ? `You lose. Computer's ${computerSelection} beat your ${playerSelection}.`
      : `You win. Your ${playerSelection} beat computer's ${computerSelection}.`;
  }

  if (playerSelection === "Paper") {
    return computerSelection === "Scissors"
      ? `You lose. Computer's ${computerSelection} beat your ${playerSelection}.`
      : `You win. Your ${playerSelection} beat computer's ${computerSelection}.`;
  }

  if (playerSelection === "Scissors") {
    return computerSelection === "Rock"
      ? `You lose. Computer's ${computerSelection} beat your ${playerSelection}.`
      : `You win. Your ${playerSelection} beat computer's ${computerSelection}.`;
  }
}

console.log(playRound("ROCK", "Scissors"));
