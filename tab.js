const choices = ['rock','paper','scissors'];
const playerdisplay = document.querySelector('.playerdisplay');
const computerdisplay = document.querySelector('.computerdisplay');
const result = document.querySelector('.result');
const playerscoredisplay = document.getElementById ('playerscoredisplay');
const computerscoredisplay = document.getElementById ('computerscoredisplay');
let computerscore = 0;
let playerscore = 0;

function start(playerschoice) {

    const computerchoice = choices[Math.floor(Math.random() * 3)];
    let answer = "";
    if (playerschoice === computerchoice) {
        answer = "IT'S A TIE";
    }
    else{
        switch (playerschoice) {
            case "rock":
                answer = (computerchoice === 'scissors') ? "YOU WIN" : "YOU LOSE"     
                break;
            case "scissors":
                answer = (computerchoice === 'paper') ? "YOU WIN" : "YOU LOSE"     
                break;
            case "paper":
                answer = (computerchoice === 'rock') ? "YOU WIN" : "YOU LOSE"     
                break;
        }
    }
    

    playerdisplay.textContent = `Player: ${playerschoice}`;
    computerdisplay.textContent = `Computer: ${computerchoice}`;
    result.textContent  = answer;

    result.classList.remove('greent', 'redt')

    switch (answer) {
        case "YOU WIN":
            result.classList.add('greent');
            playerscore++;
            playerscoredisplay.textContent = playerscore;
            break;
        case "YOU LOSE":
            result.classList.add('redt');
            computerscore++;
            computerscoredisplay.textContent = computerscore;   
            break;
        
    }



}
