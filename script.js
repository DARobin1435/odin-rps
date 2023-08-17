const choices = ['rock', 'paper', 'scissors'];
const gameResults = document.querySelector(".game-results");
const playerResults = document.querySelector(".player-results")
const computerResults = document.querySelector(".computer-results")
const roundCount = document.querySelector(".round");
const resetButton = document.querySelector(".reset-button");
const choiceButtons = document.querySelectorAll(".choice-buttons");
const title = document.querySelector(".title h3");


let playerScore = 0;
let computerScore = 0;
let rounds = 0;

let computerGuess = () =>{
    // Randomly guess from an index of the choices array and return it
    return choices[Math.floor(Math.random()*choices.length)];
};
// Check both choices and return value to represent winner
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

// Check return value of results function and outputs information on screen
function showGameResults(winner){
    if (winner === 1){
        playerScore += 1;
        gameResults.innerText = `You win Round ${rounds}`
    }else if (winner === -1){
        computerScore += 1;
        gameResults.innerText = `Computer wins Round ${rounds}`
    }else {
        gameResults.innerText = "This round is a draw!"
    }
    if (rounds >= 5){
        let finalResult = "";
        if (computerScore > playerScore){
            finalResult = "You face the might of M.A.D.!"
        }else{
            finalResult = "I'll get you next time, Gadget!"
        }
        title.innerText = finalResult;
    }    
}

function updateRoundCount(){
    rounds++;
}
function updateScore(){
    playerResults.innerText = playerScore;    
    computerResults.innerText = computerScore;
    roundCount.innerText = rounds;
}
function resetGame(){
    resetButton.style.display = "none";
    rounds = 0;
    computerScore = 0;
    playerScore = 0;
    gameResults.innerText = "";
    title.innerText = "Rock-Paper-Scissors Game";
    updateScore();
}
// Show user mouse over choice before selecting
choiceButtons.forEach(btn =>{
    btn.addEventListener("mouseover",(e)=>{
    btn.style.backgroundColor = "deepskyblue";
    btn.style.boxShadow = "2px 2px 2px gray";

    });}
)
// Remove user choice on mouse out
choiceButtons.forEach(btn =>{
    btn.addEventListener("mouseout",(e)=>{
    btn.style.backgroundColor = "gray";
    });}
)
// Add event listeners to each button
choiceButtons.forEach(btn =>{
    btn.addEventListener('click', (e)=>{
        let playerChoice = e.target.value;    
        if(rounds >= 5){
            resetButton.style.display = "block";
            return;
        }else{
            let result = chooseWinner(playerChoice, computerGuess());
            updateRoundCount();
            showGameResults(result);
            updateScore();
            
               
        }
    })
})
resetButton.addEventListener('click', resetGame);
