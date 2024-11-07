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
