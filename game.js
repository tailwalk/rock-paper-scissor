const options = ['rock','paper','scissors']
function getCompChoice(){
    const choice = options[Math.floor(Math.random() *options.length)]
    console.log(choice)
}
getCompChoice()