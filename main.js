
/*

*********************
*** stretch goals *** 
*********************

-have multiple players
-leverage an api to show motivational quotes when a button is pressed
-6 deck shoe
-loading page with an ability to create multiple users

*/

let playerCards = []; //holds the players cards //used by the score keeper
let dealerCards = []; //holds the dealers cards //used by the score keeper

let playerWallet = 500;

let playerTotalScore = 0;
let playerFinalScore = 0;
let dealerTotalScore = 0;
let dealerFinalScore = 0;

const fullDeck = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10,
  10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8,
  9, 10, 10, 10, 10, 11,
];
// const fullDeck = [
//   11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11 
// ];

let shuffledArray = fullDeck.sort((a, b) => 0.5 - Math.random()); //randomizes the deck //Math.random returns a random number between 0 and 1
let dealtCards = [];
let roundOver = false;

//QuerySelectors
let hitButton = document.querySelector("#hit-button");
let standButton = document.querySelector("#stand-button");
let dealCardsButton = document.querySelector("#deal-cards");

let displayArea = document.querySelector("#display-area-div");
let playerCardsDisplayArea = document.querySelector("#player-1");
let suitPic = document.querySelector('#suit-pic')
let dealerCardsDisplayArea = document.querySelector("#dealer");

console.log("🚀 ~ file: main.js ~ line 121 ~ shuffledArray", shuffledArray);


function nextRound() {
  if (roundOver === true) {
    playerCards = [];
    dealerCards = [];
    playerTotalScore = 0;
    dealerTotalScore = 0;
   
    displayArea.innerText = "New Game";
    displayArea.innerText = "";
  }
}


function playerScore() {
  playerTotalScore = playerCards.reduce(function (acc, cur) {
    //adds all numbers in the array together
    return acc + cur;
  });
}

function dealerScore() {
  dealerTotalScore = dealerCards.reduce(function (acc, cur) {
    return acc + cur;
  });
}

function dealInitialCards() {
  
  playerCards.unshift(shuffledArray[0]); //unshifts the first card to the front of the player arr of cards
  console.log(`Player has: ${shuffledArray[0]}`); //show the player their card
  playerScore();
  console.log("playerTotalScore1: " + playerTotalScore);
  console.log("playerFinalScore1: " + playerTotalScore);
  playerCardsDisplayArea.innerText = "Player 1:   " + playerCards;

  dealerCards.unshift(shuffledArray[1]);
  console.log(`Dealer has: ${shuffledArray[1]}`);
  dealerScore();
  console.log("dealerTotalScore1: " + dealerTotalScore);
  //console.log("🚀 ~ file: main.js ~ line 121 ~ shuffledArray", shuffledArray);
  dealerCardsDisplayArea.innerText = "Dealer:   " + dealerCards;

  playerCards.unshift(shuffledArray[2]);
  console.log(`Player has: ${shuffledArray[2]}`);
  playerScore();
  console.log("playerTotalScore2: " + playerTotalScore);
  console.log("playerFinalScore2: " + playerTotalScore);
  playerCardsDisplayArea.innerText = "Player 1:   " + playerCards;

  dealerCards.unshift(shuffledArray[3]);
  console.log(`Dealer's whole card: ${shuffledArray[3]}`);
  dealerScore(); 
  dealerCardsDisplayArea.innerText = "Dealer:   " + dealerCards;

  shuffledArray.shift([0]);
  shuffledArray.shift([1]);
  shuffledArray.shift([2]);
  shuffledArray.shift([3]);
  console.log("Player: " + playerCards);
  console.log("Dealer: " + dealerCards);
}

dealInitialCards();

if (playerTotalScore === 21) {
  displayArea.innerText = "BLACKJACK!!!";
  roundOver = true;
}

//console.log("🚀 ~ file: main.js ~ line 121 ~ shuffledArray", shuffledArray);

console.log("playerTotalScore: " + playerTotalScore);
console.log("dealerTotalScore: " + dealerTotalScore);
console.log(shuffledArray.length);

console.log("🚀 ~ file: main.js ~ line 121 ~ shuffledArray", shuffledArray);

console.log("Player: " + playerCards);
console.log("Dealer: " + dealerCards);

console.log("playerTotalScore: " + playerTotalScore);
console.log("dealerTotalScore: " + dealerTotalScore);

/************
** BUTTONS **
************/
//HIT Button
hitButton.addEventListener("click", () => {
  playerCards.push(shuffledArray[0]);
  shuffledArray.shift([0]);
  console.log("EventListener");
  console.log("Player: " + playerCards);
  playerScore();
  playerTotalScore = playerTotalScore;
  playerCardsDisplayArea.innerText = "Player 1:   " + playerCards;
  
  //Loop to deal with Ace Logic
  for (let i = 0; i < playerCards.length; i++) {
    
    console.log("inTheForLoop: " + playerCards[i]);
    
    if (playerTotalScore === 21) {
      displayArea.innerText = "BLACKJACK!!!";
      roundOver = true
      hitButton.removeEventListener()
    }
    if (playerCards[i] === 11 && playerTotalScore > 21) {
      playerTotalScore = playerTotalScore - 10;
      
      console.log("playerTotalScore: " + playerTotalScore)
      
      if (playerTotalScore > 21){
        console.log((displayArea.innerText = "BUST! 1"));
        roundOver = true;
      }
    }

    console.log(playerTotalScore);

    // if (playerTotalScore > 21) {
    //   console.log((displayArea.innerText = "BUST! 2"));
    //   roundOver = true;
    // }
  }

  if (playerTotalScore > 21) {
    roundOver = true
  }
  console.log("playerTotalScore: " + playerTotalScore);
  //shuffledArray.shift([0]);
  console.log("🚀 ~ file: main.js ~ line 121 ~ shuffledArray", shuffledArray);

  compareForWinner()
});


//STAND Button
standButton.addEventListener("click", () => {
  //displayArea.innerText = "Stand";

  while (dealerTotalScore < 17) {
    dealerCards.push(shuffledArray[0]);
    shuffledArray.shift([0]);

    console.log("Stand Button EventListener");
    console.log("Dealer: " + dealerCards);
    dealerScore();

    dealerCardsDisplayArea.innerText = "Dealer: " + dealerCards;
    console.log("dealerTotalScore: " + dealerTotalScore);
  }
  for (let i = 0; i < dealerCards.length; i++) {
    if (dealerTotalScore === 21 && playerTotalScore === 21) {
      displayArea.innerText = "Stand PUSH";
    }
    if (dealerCards[i] === 11 && dealerTotalScore > 21) {
      dealerTotalScore = dealerTotalScore - 10;

      console.log("dealerTotalScore: " + dealerTotalScore);
      if (dealerTotalScore > 21) {
        console.log((displayArea.innerText = "BUST! 3"));
        roundOver = true;
      }
    }
  }

  if (playerTotalScore > 21) {
    roundOver = true;
  }
  if (dealerTotalScore > 21) {
    roundOver = true;
  }
  if (dealerTotalScore > 16) {
    roundOver = true;
  }

  roundOver = true;

  compareForWinner();
});

dealCardsButton.addEventListener("click", () => {
  playerCards = [];
  dealerCards = [];
  playerTotalScore = 0;
  dealerTotalScore = 0;
  displayArea.innerText = "clear all";
  nextRound()
  setTimeout(dealInitialCards(), 3000);
});

console.log(shuffledArray.length);


compareForWinner();

//comparing for the winner

function compareForWinner() {
  if (roundOver === true) {
    if (playerTotalScore > 21) {
      displayArea.innerText = "You Busted =(";
    } else if (dealerTotalScore > 21) {
      displayArea.innerText = "Dealer BUSTS!";
    } else if (dealerTotalScore === playerTotalScore) {
      displayArea.innerText = "PUSH";
    } else if (playerTotalScore > dealerTotalScore) {
      displayArea.innerText = "PLAYER WINS!!!";
      playerCardsDisplayArea.innerText = "Winner!";
    } else if (playerTotalScore < dealerTotalScore) {
      displayArea.innerText = "Dealer wins";
      dealerCardsDisplayArea.innerText = "Dealer: " + dealerCards;
    }
  }
}




  // if (playerTotalScore < 22) {
  //   if (playerTotalScore > dealerTotalScore) {
  //     playerCardsDisplayArea.innerText = "Winner!";
  //     playerCardsDisplayArea.innerText = "Player 1:   " + playerCards;
  //   } else if (playerTotalScore < dealerTotalScore) {
  //     playerCardsDisplayArea.innerText = "Not this time";
  //     playerCardsDisplayArea.innerText = "Player 1:   " + playerCards;
  //   }
  // }

  // if (dealerTotalScore > 21) {
  //   dealerCardsDisplayArea.innerText = "Dealer Busts!";
  //   dealerCardsDisplayArea.innerText = "Dealer: " + dealerCards;
  // }