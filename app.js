
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors"); 
const playedRound = document.querySelector("#playedRound");
const resultDiv = document.querySelector("#result");

let humanScore = 0;
let computerScore = 0;

function playRound(human){
    let computerChoice = getComputerChoice();
    let roundPlayed = checkGame(human, computerChoice);
    if(roundPlayed > 0){
        humanScore++;
    }
    if(roundPlayed < 0){
        computerScore++;
    }
    playedRound.textContent = returnRoundStatement(roundPlayed, human, computerChoice);
    resultDiv.textContent = "Your score: " + humanScore + ", " + "computers' score: " + computerScore + ".";
}

rockBtn.addEventListener("click", () => {
    playRound(rockBtn.id);
});
paperBtn.addEventListener("click", () => {
    playRound(paperBtn.id);
});
scissorsBtn.addEventListener("click", () => {
    playRound(scissorsBtn.id);
});


function returnRoundStatement(result, humanChoice, computerChoice){
    switch(result){
        case -1:
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        case 0:
            return `You both chose ${computerChoice}.`;
        case 1:
            return `You win! ${humanChoice} beats ${computerChoice}`;
    }
}

function checkGame(humanChoice, computerChoice){

    if(computerChoice === humanChoice){
        return 0;
    }
    if(humanChoice === "rock" && computerChoice === "paper"){
        return -1;
    }
    if(humanChoice === "paper" && computerChoice === "scissors"){
        return -1;
    }
    if(humanChoice === "scissors" && computerChoice === "rock"){
        return -1;
    }
    return 1;
}


function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice(){
    while(true){
        let humanChoice = prompt("What's your pick?");
        humanChoice = humanChoice.toLowerCase();
        switch (humanChoice){
            case 'rock':
            case 'paper':
            case 'scissors':
                return humanChoice;
        }
    }
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for(i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(computerChoice);
        let outcome = checkGame(humanChoice, computerChoice);
        if(outcome === "tie"){
            console.log("You both chose " + humanChoice + ".");
        }
        if(outcome === "lose"){
            console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
            computerScore = computerScore + 1;
        }
        if(outcome === "win"){
            console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
            humanScore = humanScore + 1;
        }
    }
    console.log("Your score is " + humanScore + ". Computers score is " + computerScore + ".");
}