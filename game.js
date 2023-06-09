const options = ['rock','paper','scissors']
function getCompChoice(){
    const choice = options[Math.floor(Math.random() *options.length)]
   return choice
}


function checkWinner(playerSelection, getCompChoice){
if (playerSelection === getCompChoice){
    return 'tie'
}else if(playerSelection == 'rock' && getCompChoice == 'scissors' ||
        playerSelection == 'scissors' && getCompChoice == 'paper' ||
        playerSelection == 'paper' && getCompChoice == 'rock'){
                return "Player Wins"
        }else{
            return "Computer Wins"
        }
}
function rounds(playerSelection, getCompChoice){
    const result = checkWinner(playerSelection, getCompChoice)
    if (result == 'tie'){
        return 'Its a Tie'
    }else if(result == 'Player Wins'){
        return `You Won! ${playerSelection} beats ${getCompChoice}`
    }else{
        return `You Lose! ${getCompChoice} beats ${playerSelection}`
    }
}
function getP1Choice(){
    let validatedInput = false
    while(validatedInput == false){
        const choice = prompt("Rock Paper or Scissors")
        if(choice == null){
        continue;
        }
        const choiceCase = choice.toLowerCase()
        if(options.includes(choiceCase)){
            validatedInput = true;
            return choiceCase
        }
    }
}
function game(){
    let scorePlayer = 0
    let scoreComp = 0
    for (let i = 0; i<5; i++){
        const playerSelection = getP1Choice()
        const compSelection = getCompChoice()
        console.log(rounds(playerSelection,compSelection))
        if (checkWinner(playerSelection, compSelection) == 'Player Wins'){
            scorePlayer++
        }else if (checkWinner(playerSelection, compSelection) == 'Player Wins'){
            scoreComp++

        }
    }
    console.log('Game Over!')
    if(scorePlayer > scoreComp){
        console.log("Player Wins")
    }else if(scorePlayer < scoreComp){
        console.log("Computer Wins")
    }else{
        console.log("How did we get a tie?")
    }
}
game()
