
    const hand = ['rock', 'paper', 'scissors']
    const computerSelection = hand[Math.floor(Math.random()*hand.length)];
    


    // const prompt = require('prompt-sync')({sigint: true});

    // let playerSelection = prompt('rock, paper or scissors');

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    readline.question('rock, paper or scissors', playerSelection => {
        console.log('you chose', playerSelection)
function play(playerSelection, computerSelection) {
   
    if (computerSelection === 'rock' && playerSelection === 'paper' || computerSelection === 'scissors' && playerSelection === 'rock'|| computerSelection === 'paper' && playerSelection === 'scissors'){
        return console.log('congratulations, You win!')
    }
   
    else if (computerSelection === 'scissors' && playerSelection === 'paper' || computerSelection === 'rock' && playerSelection === 'scissors' || computerSelection === 'paper' && playerSelection === 'rock'){
        return console.log('you lost, try again')   
    }

    else if 
        (computerSelection === playerSelection) {
            return console.log('tied!')
        }
    };

play(playerSelection, computerSelection);
console.log('computer chose: ', computerSelection)

readline.close();
});