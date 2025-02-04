const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;
let playgame = document.getElementById();

function playGame(playerChoice){


    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result ="";

    if(playerChoice === computerChoice){
        result = "Its a draw";
    }
    else{
        switch(playerChoice){
            case "rock":
                (computerChoice === "scissors") ? "You Win" : "You Lose";
                break;
            case "paper":
                (computerChoice === "scissors") ? "You Win" : "You Lose";
                break;
            case "scissors":
                (computerChoice === "scissors") ? "You Win" : "You Lose";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    switch(result){
        case "You Win":
            playerscore++;
            playerScoreDisplay.textContent = playerscore;
            break;
        case "You Lose":
            computerscore++;
            playerScoreDisplay.textContent = computerrscore;
            break;
    }
}