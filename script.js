const choices = ['rock', 'paper', 'scissors'];
const playerChoice = document.querySelector(".player-choice");
const playButton = document.querySelector(".play-button");
const gameResults = document.querySelector(".game-results");
const playerResults = document.querySelector(".player-results")
const computerResults = document.querySelector(".computer-results")
const roundCount = document.querySelector(".rounds");
const resetButton = document.querySelector(".reset-button");

let playerScore = 0;
let computerScore = 0;
let rounds = 0;

let computerGuess = () =>{
    // Randomly guess from an index of the choices array and return it
    return choices[Math.floor(Math.random()*choices.length)];
};

function chooseWinner(choice1, choice2){
    if (choice1 === choice2){
        return 0
    }else if (choice1 == "rock" &&
    choice2=="scissors"|| 
    choice1 == "scissors" && 
    choice2 == "paper" ||
    choice1 == "paper" && 
    choice2 == "rock"){
        return 1
    }else{
        return -1
    }
}


function showGameResults(winner){
    if (winner === 1){
        playerScore += 1;
        gameResults.innerText = "You win"
    }else if (winner === -1){
        computerScore += 1;
        gameResults.innerText = "Computer wins"
    }else {
        gameResults.innerText = "It's a draw!"
    }
}
function updateRoundCount(){
    rounds++;
}
function updateScore(){
    playerResults.innerText = playerScore;    
    computerResults.innerText = computerScore;    
}
function resetGame(){
    resetButton.style.display = none;
    rounds = 0;
    computerScore = 0;
    playerScore = 0;
}
// Add event listener to play button
playButton.addEventListener("click", ()=>{
    
    if (playerChoice.value == ""){
        return;
    }else if(rounds >= 5){
        resetButton.style.display = block;
        return;
    }else{
        let result = chooseWinner(playerChoice.value, computerGuess());
        showGameResults(result);
        updateScore();
        updateRoundCount();
        playerChoice.value = "";   
    }
});

