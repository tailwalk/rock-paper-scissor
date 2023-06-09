const scoreBoard = document.querySelector('.scores');
const results = document.querySelector('.results');
const rock = document.getElementById('r')
const paper = document.getElementById('p')
const scissors = document.getElementById('s')
const userScore = 0
const compScore = 0
const userTally = document.getElementById('#user')
const compTally = document.getElementById('#comp')

function game(userChoice){
    console.log('poop')
}

function main(){
    rock.addEventListener('click', function(){
        game('r')

    })
    paper.addEventListener('click', function(){
        game('p')

    })
    scissors.addEventListener('click', function(){
        game('s')

    })
}

