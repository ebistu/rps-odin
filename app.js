
playGame();
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for(i = 0; i < 4; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }    
    console.log("Your score: " + humanScore + " Computer score: " + computerScore);
    function playRound(humanChoice, computerChoice){
        switch(humanChoice){
            case 'rock':
                if(computerChoice === 'rock'){
                    console.log("You tie!");
                }else if(computerChoice === 'paper'){
                    console.log("You lose! paper beats rock");
                    computerScore = computerScore + 1;
                }else if(computerChoice === 'scissors'){
                    console.log("You win! rock beats scissors");
                    humanScore = humanScore + 1;
                }
            case 'paper':
                if(computerChoice === 'paper'){
                    console.log("You tie!");
                }else if(computerChoice === 'scissors'){
                    console.log("You lose! scissors beats paper");
                    computerScore = computerScore + 1;
                }else if(computerChoice === 'rock'){
                    console.log("You win! paper beats rock");
                    humanScore = humanScore + 1;
                }
            case 'scissors':
                if(computerChoice === 'scissors'){
                    console.log("You tie!");
                }else if(computerChoice === 'rock'){
                    console.log("You lose! rock beats scissors");
                    computerScore = computerScore + 1;
                }else if(computerChoice === 'paper'){
                    console.log("You win! scissors beats paper");
                    humanScore = humanScore + 1;
                }
        }
    }
}

function checkGame(humanChoice, computerChoice){
    switch(humanChoice){
        case 'rock':
            if(computerchoice === humanChoice){
                return "tie";
            } else if(computerChoice === "paper"){
                return "lose";
            } else if(computerChoice === "scissors")
    }
}


function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

function getHumanChoice(){
    let humanChoice = prompt("What's your pick?");
    humanChoice = humanChoice.toLowerCase();
    switch (humanChoice){
        case 'rock':
            return humanChoice;
        case 'paper':
            return humanChoice;
        case 'scissors':
            return humanChoice;
        default:
            return getHumanChoice();
    }
}
