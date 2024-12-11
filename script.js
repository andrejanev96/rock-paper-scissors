let humanScore = 0;
let computerScore = 0;

// Function to get the computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a single round
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    
    const resultDiv = document.querySelector("#result");
    const scoreDiv = document.querySelector("#score");

    // Check for a tie
    if (humanChoice === computerChoice) {
        resultDiv.textContent = `It's a tie! Both chose ${humanChoice}`;
        return;
    }

    // Determine the winner and update scores
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultDiv.textContent = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`;
    } else {
        computerScore++;
        resultDiv.textContent = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`;
    }

    // Update the score display
    scoreDiv.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;

    // Check for game winner
    if (humanScore === 5) {
        resultDiv.textContent = "Congratulations! You won the game!";
        disableButtons();
    } else if (computerScore === 5) {
        resultDiv.textContent = "Game over! The computer won the game.";
        disableButtons();
    }
}

// Disable buttons after the game ends
function disableButtons() {
    const buttons = document.querySelectorAll(".choice-button");
    buttons.forEach(button => button.disabled = true);
}

// Add event listeners to buttons
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".choice-button");
    buttons.forEach(button => {
        button.addEventListener("click", () => playRound(button.dataset.choice));
    });
});