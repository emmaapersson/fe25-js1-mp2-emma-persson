let totalScore = 0;
let roundScore = 0;
let numRounds = 0;

const playerNameTitle = document.getElementById('playerName');
const displayTScore = document.querySelector('#totalScore');
const displayRScore = document.querySelector('#roundScore');
const displayNumRounds = document.querySelector('#numRounds');
const displayDice = document.querySelector('#dice');
const winnerText = document.getElementById('winnerText');


const form = document.querySelector('form');
    form.addEventListener('submit', startGame);
const restartBtn = document.querySelector('#restart');
    restartBtn.addEventListener('click', restartGame);
const rollBtn = document.querySelector('#roll');
    rollBtn.addEventListener('click', rollDice);
const freezeBtn = document.querySelector('#freeze');
    freezeBtn.addEventListener('click', freeze);

document.getElementById('game').style.display = 'none';
document.getElementById('winner').style.display = 'none';


function startGame(event){
    event.preventDefault()
    const input = document.getElementById('nameInput').value;

    playerName = input;
    playerNameTitle.innerText = playerName;

    if (input === "") {
        return;
    }
    
    document.getElementById('game').style.display = 'block';
    document.getElementById('nameBox').style.display = 'none';
}

function rollDice(event){
    displayNumRounds.innerText = 'Number of rounds played:' + numRounds;
    displayRScore.innerText = 'Round Score:'+ roundScore;
    displayNumRounds.innerText = 'Number of rounds played:' + numRounds;

    const dice = Math.floor(Math.random() * 6) + 1;
    displayDice.innerText = dice;

    // const diceClasses = ['one', 'two', 'three', 'four', 'five', 'six']
    // console.log(diceClasses[dice])

    if (dice === 1){
        roundScore = 0;
        numRounds++;
        displayRScore.innerText = 'Round Score:'+ roundScore;
        displayNumRounds.innerText = 'Number of rounds played:' + numRounds;
    }
    else if (totalScore >= 100){
        document.getElementById('winner').style.display = 'block';
        winnerText.innerText = `Congratulations! You won the game and it took ${numRounds} rounds!`
}
    else{
        roundScore += dice;
        displayRScore.innerText = 'Round Score:' + roundScore;
    } 
}

function freeze(event){
    totalScore += roundScore
    numRounds++;
    displayTScore.innerText = 'Total Score:' + totalScore;
    displayNumRounds.innerText = 'Number of rounds played:' + numRounds;
    roundScore = 0;

    if (totalScore >= 100){
        document.getElementById('winner').style.display = 'block';
        winnerText.innerText = `Congratulations! You won the game and it took ${numRounds} rounds!`
    }
}

function restartGame(event){
    totalScore = 0;
    roundScore = 0;
    numRounds = 0;

    displayNumRounds.innerText = 'Number of rounds played:' + numRounds;
    displayRScore.innerText = 'Round Score:'+ roundScore;
    displayTScore.innerText = 'Total Score:' + totalScore;
    document.getElementById('winner').style.display = 'none';
}


// när tärningen slås - generera ett nummer från ett till sex

// lägg till tärningsvärdet till omgångspoängen

// om tärningen är en etta - ny runda, numRounds++, omgångspoängen blir noll

//om användaren klickar freeze - omgångspoängen läggs till till den totala poängen, numRounds++

// när em omgång tar slut - om den totala poängen är 100 eller mer - användaren vinner. 
