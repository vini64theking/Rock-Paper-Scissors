const choices=['Rock','Paper','Scissors'];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScoreCount");
const computerScore = document.getElementById("computerScoreCount");
let playerCount = 0;
let computerCount = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result="";

    if(playerChoice===computerChoice){
        result = "Its a Tie!"
    }

    else{
        switch(playerChoice){
            case "Rock" :
                result = (computerChoice === "Scissors") ? "You Win!":"You Lose!";
                break;
            case "Paper" :
                result = (computerChoice === "Rock") ? "You Win!":"You Lose!";
                break;
            case "Scissors" :
                result = (computerChoice === "Paper") ? "You Win!":"You Lose!";
                break;
        }
    }
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove('greenText','redText');

    switch(result){
        case "You Win!":
            resultDisplay.classList.add("greenText");
            playerCount++;
            playerScore.textContent=playerCount;
            break;
        case "You Lose!":
            resultDisplay.classList.add("redText");
            computerCount++;
            computerScore.textContent=computerCount;
            break;
    }


}