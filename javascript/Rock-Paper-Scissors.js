

function getComputerChoice() {
    let computerRandom = Math.random();
    if (0 <= computerRandom && computerRandom < 0.33) {
        return "rock";
    }
    else if (0.5 < computerRandom && computerRandom < 0.66) {
        return "paper";
    }

    else if (0.75 < computerRandom && computerRandom < 1) {
        return "scissors";
    }


};


function getHumanChoice() {
    let HumanInput = prompt("Enter (Rock, Paper,Scissors):");
    return HumanInput.trim().toLowerCase();;
    /* let comp = getComputerChoice();
     if (HumanInput == comp) {
         console.log("Tie!");
     }
     if (HumanInput == "Rock") {
         if (comp == "Paper") {
             console.log(`computer : ${comp}`);
             console.log(`you : ${HumanInput}`);
             console.log("You win!");
         }
         else if (comp == "Scissors") {
             console.log(`computer : ${comp}`);
             console.log(`you : ${HumanInput}`);
             console.log("You loss!");
         }*/


    /*if (HumanInput == "Paper") {
    
        if (comp == "Rock") {
            console.log(`computer : ${comp}`);
            console.log(`you : ${HumanInput}`);
    
            console.log("You win!");
        }
        else if (comp == "Scissors") {
            console.log(`computer : ${comp}`);
            console.log(`you : ${HumanInput}`);
    
            console.log("You loss!");
        }
    }
    if (HumanInput == "Scissors") {
        if (comp == "Rock") {
            console.log(`computer : ${comp}`);
            console.log(`you : ${HumanInput}`);
            console.log("You loss!");
        }
        else if (comp == "Paper") {
            console.log(`computer : ${comp}`);
            console.log(`you : ${HumanInput}`);
    
            console.log("You Win!");
        }
    }
    */



}


function playRound(HumanChoice, computerChoice) {
    let comp = computerChoice;
    let HumanInput = HumanChoice;

    if (HumanInput == comp) {
        return "tie";
    }
    if (HumanInput == "rock") {
        if (comp == "paper") {
            return "computer";

        }
        else if (comp == "scissors") {
            return "player";


        }
    }
    if (HumanInput == "paper") {

        if (comp == "rock") {
            return "player";

        }
        else if (comp == "scissors") {
            return "computer";

        }
    }
    if (HumanInput == "scissors") {
        if (comp == "rock") {
            return "computer";

        }
        else if (comp == "paper") {
            return "player";

        }


    }
}
function playGame() {
    let humanScore = 0;
    let computerScore = 0;


    for (i = 1; i <= 5; i++) {
        let result = playRound(getHumanChoice(), getComputerChoice());
        if (result == "player") {
            console.log(`You win!!${result}`)
            humanScore++;
        }
        else if (result == "computer") {
            console.log(`You loss!!${result}`)
            computerScore++;
        }

    }
    if (computerScore > humanScore) {
        console.log("You loss, computer beats you!");
    }
    else if (computerScore < humanScore) {
        console.log("You win, you beat computer!!");
    }
    else {
        console.log("Tie , try again!");
    }

}

playGame();