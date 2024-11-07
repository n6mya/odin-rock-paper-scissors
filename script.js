function getComputerChoice() {
    let randomizer = Math.floor(Math.random() * 100);
    if (randomizer >= 0 && randomizer <= 33){
        return "rock";
    } else if (randomizer >= 34 && randomizer <= 66){
        return "paper";
    } else {
        return "scissors";
    }
}

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
}

getHumanChoice();
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;