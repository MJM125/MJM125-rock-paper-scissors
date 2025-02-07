const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice){


    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result ="";

    if(playerChoice === computerChoice){
        result = "Its a draw";S
    }
    else{
        switch(playerChoice){
            case "rock":
                (computerChoice === "scissors") ? "You Win" : "You Lose";
                break;
            case "paper":
                (computerChoice === "rock") ? "You Win" : "You Lose";
                break;
            case "scissors":
                (computerChoice === "paper") ? "You Win" : "You Lose";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    switch(result){
        case "You Win":
            playerScore++;
            playerScoreDisplay.textContent = playerscore;
            break;
        case "You Lose":
            computerScore++;
            computerScoreDisplay.textContent = computerrscore;
            break;
    }
}