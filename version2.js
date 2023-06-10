const scoreBoard = document.querySelector('.scores');
const result = document.querySelector('.result > p');
const rock = document.getElementById('r')
const paper = document.getElementById('p')
const scissors = document.getElementById('s')
let userScore = 0
let compScore = 0
const userTally = document.getElementById('user-score')
const compTally = document.getElementById('comp-score')

function getCompChoice(comp){
    const choices =["r", "p", "s"];
    const botChoice = choices[Math.floor(Math.random() * choices.length)]
    return botChoice
}
function switchToWord(letter){
    if(letter === 'r'){
        return 'Rock'
    }
    if(letter === 'p'){
        return 'Paper'
    }
    if(letter === 's'){
        return 'Scissors'
    }
}
function win(userChoice, compChoice){
    userScore++
    userTally.innerHTML = userScore
    compTally.innerHTML = compScore
    result.innerHTML = `${switchToWord(userChoice)} beats ${switchToWord(compChoice)}. You Win!`
    document.getElementById(userChoice).classList.add('greenglow')
    setTimeout(() => document.getElementById(userChoice).classList.remove('greenglow'), 1000)

}
function lose(userChoice,compChoice){
    compScore++
    userTally.innerHTML = userScore
    compTally.innerHTML = compScore
    result.innerHTML = `${switchToWord(compChoice)} beats ${switchToWord(userChoice)}. You Lose!`
    document.getElementById(userChoice).classList.add('redglow')
    setTimeout(() => document.getElementById(userChoice).classList.remove('redglow'), 1000)
    
}
function tie(userChoice, compChoice){
    userTally.innerHTML = userScore
    compTally.innerHTML = compScore
    result.innerHTML = `You and the Bot Chose ${switchToWord(compChoice)}. It's a tie!`
    document.getElementById(userChoice).classList.add('grayglow')
    setTimeout(() => document.getElementById(userChoice).classList.remove('grayglow'), 1000)
    
}

function game(userChoice){
    const compChoice = getCompChoice()
 switch (userChoice + compChoice){
    case "pr":
    case "rs":
    case "sp":
    win(userChoice, compChoice) 
        break;
    case "rp":
    case "ps":
    case "sr":
    lose(userChoice, compChoice)
        break;
    case "pp":
    case "ss":
    case "rr":
    tie(userChoice, compChoice)
        break;
 }
}
game()

function main(){
    rock.addEventListener('click', () =>game('r'));
    paper.addEventListener('click', () =>game('p'));
    scissors.addEventListener('click', () => game('s'));
    }
main()
