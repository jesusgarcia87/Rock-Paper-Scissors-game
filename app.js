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
        //computer otions
        const computerOtions = ['rock', 'paper', 'scissors'];

        const computerNumber = Math.floor(Math.random() * 3);
        
    }

    //Is call all the inner function
    startGame();
    playMatch();
};


//start the game funsction
game();