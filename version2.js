const scoreBoard = document.querySelector('.scores');
const result = document.querySelector('.result > p');
const rock = document.getElementById('r')
const paper = document.getElementById('p')
const scissors = document.getElementById('s')
let userScore = 0
let compScore = 0
const userTally = document.getElementById('user-score')
const compTally = document.getElementById('comp-score')

function getCompChoice(user, comp){
    const choices =["r", "p", "s"];
    const botChoice = choices[Math.floor(Math.random() * choices.length)]
    return botChoice
}
function win(userChoice, compChoice){
    userScore++
    console.log(userScore)
    console.log('win')
    userTally.innerHTML = userScore
    compTally.innerHTML = compScore
    result.innerHTML = `${userChoice} beats ${compChoice}`

}
function lose(){
    compScore++
    console.log(compScore)
    userTally.innerHTML = userScore
    compTally.innerHTML = compScore
    
}
function tie(){
    userTally.innerHTML = userScore
    compTally.innerHTML = compScore
    
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
    rock.addEventListener('click', function(){
        game('r');
    })
    paper.addEventListener('click', function(){
        game('p');
    })
    scissors.addEventListener('click', function(){
        game('s');
    })
    }
main()
