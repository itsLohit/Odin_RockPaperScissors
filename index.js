// Game Variables
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let humanScore = 0;
let computerScore = 0;




// Display
const scoreHuman = document.querySelector(".scoreHuman");
const scoreComputer = document.querySelector(".scoreComputer");
const resultDisplay = document.querySelector(".result-display");
scoreHuman.textContent="You:" + " " + humanScore;
scoreComputer.textContent="Computer:" + " " + computerScore;









// Buttons
const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");
const btnReset = document.querySelector("#btnReset");




btnRock.addEventListener("click", ()=>{
    playRound("rock");
});



btnPaper.addEventListener("click", ()=>{
    playRound("paper");
});



btnScissors.addEventListener("click", ()=>{
    playRound("scissors");
});


btnReset.addEventListener("click", ()=>{
    humanScore = 0;
    computerScore = 0;
    scoreHuman.textContent="You:" + " " + humanScore;
    scoreComputer.textContent="Computer:" + " " + computerScore;
    resultDisplay.textContent="Let's start the game. Choose between rock, paper or scissors.";

});



function getComputerChoice(){
    const choice = [rock, paper, scissors];
    return choice[Math.floor(Math.random()*3)];
}

    

    function playRound(humanChoice){
        if((humanScore<5) && (computerScore<5)){
            const computerChoice = getComputerChoice();
            let result = "Invalid Input";
            if (humanChoice===computerChoice){
                result = "Tie!";
            }
             else if(computerChoice===rock){
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
            else if(computerChoice===paper){
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
            else if(computerChoice===scissors){
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
            resultDisplay.textContent=result;
            scoreHuman.textContent="You:" + " " + humanScore;
            scoreComputer.textContent="Computer:" + " " + computerScore;
            console.log("Human=" + humanChoice);
            console.log("Computer=" + computerChoice);
        }

        else if(humanScore>computerScore){
            resultDisplay.textContent="Congrats! The Final Winner is You!";
        }
        else{
            resultDisplay.textContent="Uff! You Lose the Match!";
        }
        

        
    }

    

    
    
  
    

console.log("Final Score"+" "+"Computer="+computerScore+" "+"You="+humanScore)




