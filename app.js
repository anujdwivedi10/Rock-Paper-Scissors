const game = () => {
    let pScore = 0;
    let cScore = 0;

    // start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');  // returns the first element which matches with this selector
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

//play match
const playMatch = () => {
    const options = document.querySelectorAll('.options button');  //returns all the buttons inside the option id
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');

    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand => {
        hand.addEventListener('animationend', function() {
            this.style.animation = "";
        });
    });

    // computer Options
    const computerOptions = ['Rock','Paper','Scissors'];


    options.forEach(option => {
        option.addEventListener('click', function() {
            // console.log(this);      //will give output acc to option clicked
            // computer Choice
            // console.log(computerNumber);       
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];
            // console.log(computerChoice);

            setTimeout( () => {
                 // here we call compareHands
            compareHands(this.textContent,computerChoice);
            // this.textContent is the option selected by user
            // we are inside the function options so we can use this keyword for accessing its propertiees
     
     
            // Update images
            playerHand.src = `./icons/${this.textContent}.png`;
            computerHand.src = `./icons/${computerChoice}.png`;

            },1000);
            
           

            // Animation
            playerHand.style.animation = "shakePlayer 1s ease";
            computerHand.style.animation = "shakeComputer 1s ease";
        });
    });
    
};

const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');

    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
};

const compareHands = (playerChoice, computerChoice) => {
    //update text
    const winner = document.querySelector('.winner');
    // Checking for a tie
    if(playerChoice === computerChoice)
    {
        winner.textContent = 'It is a tie';
        return;
    }
    // Check for Rock
    if(playerChoice === 'Rock')
    {
        if(computerChoice === 'Scissors')
        {
            winner.textContent = 'Player Wins';
            pScore++;
            updateScore();
            return;
        }
        else
        {
            winner.textContent = 'Computer Wins';
            cScore++;
            updateScore();
            return;
        }
    }
    // Checking for paper
    if(playerChoice === 'Paper')
    {
        if(computerChoice === 'Scissors')
        {
            winner.textContent = 'Computer Wins';
            cScore++;
            updateScore();
            return;
        }
        else
        {
            winner.textContent = 'Player Wins';
            pScore++;
            updateScore();
            return;
        }
    }
    // Chcking for Scissors
    if(playerChoice === 'Scissors')
    {
        if(computerChoice === 'Rock')
        {
            winner.textContent = 'Computer Wins';
            cScore++;
            updateScore();
            return;
        }
        else
        {
            winner.textContent = 'Player Wins';
            pScore++;
            updateScore();
            return;
        }
    }

}


 // call all the inner function
 startGame();
 playMatch();

};



// start the game function
 game();