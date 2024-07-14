const rock = "rock";
const paper = "paper";
const scissors = "scissors";


let humanScore = 0;
let computerScore = 0;

for(let i=0; i<5; i++){
    playGame()
}

function getComputerChoice(){
    let randomNum = Math.random();
    if ((randomNum>=0) && (randomNum<=0.3))
        return rock;
    else if ((randomNum>0.3) && (randomNum<=0.6))
        return paper;
    else
    return scissors;
}

function getHumanChoice(){
    let humanChoice = prompt("Enter your choice: rock/paper/scissors");
    return humanChoice.toLowerCase();
}

function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    function playRound(humanChoice, computerChoice){
        let result = "Invalid Input";
        if (humanChoice==computerChoice){
            result = "Tie!";
        }
        else if(computerChoice==rock){
            switch(humanChoice){
                case paper:
                    result = "You win! Paper beats Rock";
                    humanScore+=1;
                    break;
                case scissors:
                    result = "You lose! Rock beats Scissors";
                    computerScore+=1;
                    break;
            }
        }
        else if(computerChoice==paper){
            switch(humanChoice){
                case scissors:
                    result = "You win! Scissors beats Paper";
                    humanScore+=1;
                    break;
                case rock:
                    result = "You lose! Paper beats Rock";
                    computerScore+=1;
                    break;
            }
        }
        else if(computerChoice==scissors){
            switch(humanChoice){
                case rock:
                    result = "You win! Rock beats Scissors";
                    humanScore+=1;
                    break;
                case paper:
                    result = "You lose! Scissors beats Paper";
                    computerScore+=1;
                    break;
            }
        }
        return result;
    }

    console.log(humanSelection)
    console.log(computerSelection)
    console.log(playRound(humanSelection, computerSelection))
    console.log("Computer="+computerScore+" "+"You="+humanScore)
}

console.log("Final Score"+" "+"Computer="+computerScore+" "+"You="+humanScore)




