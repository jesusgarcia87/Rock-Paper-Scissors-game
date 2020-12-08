const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    const startGame = ()=> {
        const PlayBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        
        PlayBtn.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut');
        });
    };

    //Is call all the inner function
    startGame();
    updateScore();
};


//start the game funsction