let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Please enter rock, paper, or scissors:").toLowerCase();
    while (!["rock", "paper", "scissors"].includes(choice)) {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    // Convert humanChoice to lowercase to make it case-insensitive
    humanChoice = humanChoice.toLowerCase();

    // Check for a tie
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
        return;
    }

    // Determine the winner and increment the score
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
    }
}

// Assume the following functions have already been defined in the global scope:
// getComputerChoice, getHumanChoice, playRound

function playGame() {
    // Initialize scores inside the playGame function
    let humanScore = 0;
    let computerScore = 0;

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        const humanChoice = getHumanChoice();  // Get the human's choice
        const computerChoice = getComputerChoice();  // Get the computer's choice
        playRound(humanChoice, computerChoice);  // Play a single round

        // Update the scores based on round results
        if (humanChoice === computerChoice) {
            // It's a tie, no score change
            console.log(`It's a tie for Round ${i + 1}`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
        } else {
            computerScore++;
        }
    }

    // Declare the overall winner
    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the game with a score of ${humanScore} to ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Game over! The computer won the game with a score of ${computerScore} to ${humanScore}`);
    } else {
        console.log(`It's a draw! Both you and the computer have a score of ${humanScore}`);
    }
}

// Start the game
playGame();