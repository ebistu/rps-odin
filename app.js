
playGame();




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

function checkGame(humanChoice, computerChoice){
    if(computerChoice === humanChoice){
        return "tie";
    }
    if(humanChoice === "rock" && computerChoice === "paper"){
        return "lose";
    }
    if(humanChoice === "paper" && computerChoice === "scissors"){
        return "lose";
    }
    return "win";
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
