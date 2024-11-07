function getComputerChoice() {
    let randomizer = Math.floor(Math.random() * 100);
    if (randomizer >= 0 && randomizer <= 33){
        return "rock";
    } else if (randomizer >= 34 && randomizer <= 66){
        return "paper";
    } else {
        return "scissors";
    }
} // This is to get the computer's choice for RPS

// console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("What's your choice (rock, paper, scissors)")
    if (choice == "rock") {
        return "rock";
    } else if (choice == "paper") {
        return "paper";
    } else if (choice == "scissors") {
        return "scissors";
    } else {
        alert("Invalid choice");
        getHumanChoice();
    }
} // This is to get the user's choice for RPS

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore += 1;
        //return "You lose! Paper beats Rock";
        return console.log("You lose! Paper beats Rock");
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore += 1;
        //return "You win! Rock beats Scissors";
        return console.log("You win! Rock beats Scissors");
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore += 1;
        //return "You win! Paper beats Rock";
        return console.log("You win! Paper beats Rock");
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore += 1;
        //return "You lose! Paper beats Rock";
        return console.log("You lose! Paper beats Rock");
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore += 1;
        //return "You lose! Rock beats Scissors";
        return console.log("You lose! Rock beats Scissors");
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore += 1;
        //return "You win! Scissors beats Paper";
        return console.log("You win! Scissors beats Paper")
    } else {
        //return "Draw"
        return console.log("Draw")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection.toLowerCase(), computerSelection.toLowerCase());