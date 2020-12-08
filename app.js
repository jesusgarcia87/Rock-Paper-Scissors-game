const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    //start the game
    const startGame = ()=> {
        const PlayBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        
        PlayBtn.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut');
            match.classList.add("fadeIn");
        });
    };
    //play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        //computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function() {
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                // call compare hands
            });
        }); 
        
    };

    const comparehands = (playerChoice, computerChoice) =>{
        //update texts
        const winner = document.querySelector('.winner')
        //checking 4 a tie
        if(playerChoice === computerChoice) {
            winner.textContent = 'Its a tie';
            return;
        }
        //check 4 rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors') {
                winner.textContent = 'Player Wins'
                return;
            }else{
                winner.textContent = 'Computer Wins';
                return;
            }
        }
        //check 4 paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors') {
                winner.textContent = 'Computer Wins'
                return;
            }else{
                winner.textContent = 'Player Wins';
                return;
            }
        }
        // check 4 scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'scissors') {
                winner.textContent = 'Computer Wins'
                return;
            }else{
                winner.textContent = 'Player Wins';
                return;
            }
        }
        //check for scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock') {
                winner.textContent = 'Computer Wins'
                return;
            }else{
                winner.textContent = 'Player Wins';
                return;
            }
        }
    } 

    //Is call all the inner function
    startGame();
    playMatch();
};


//start the game funsction
game();