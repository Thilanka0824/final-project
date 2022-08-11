
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
  9, 10, 10, 10, 10, 11,   11,11,11,11,11,11,11,11,11,11
];

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
  playerFinalScore = playerTotalScore;
  console.log("playerTotalScore1: " + playerTotalScore);
  console.log("playerFinalScore1: " + playerFinalScore);
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
  playerFinalScore = playerTotalScore;
  console.log("playerTotalScore2: " + playerTotalScore);
  console.log("playerFinalScore2: " + playerFinalScore);
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


//BUTTONS
hitButton.addEventListener("click", () => {
  playerCards.push(shuffledArray[0]);
  shuffledArray.shift([0]);
  console.log("EventListener");
  console.log("Player: " + playerCards);
  playerScore();
  playerFinalScore = playerTotalScore;
  playerCardsDisplayArea.innerText = "Player 1:   " + playerCards;
  
  for (let i = 0; i < playerCards.length; i++) {
    
    console.log("inTheForLoop: " + playerCards[i]);
    
    if (playerFinalScore === 21) {
      displayArea.innerText = "BLACKJACK!!!";
      roundOver = true
      hitButton.removeEventListener()
    }
    if (playerCards[i] === 11 && playerTotalScore > 21) {
      playerTotalScore = playerTotalScore - 10;
      playerFinalScore = playerTotalScore
      console.log("playerFinalScore: " + playerFinalScore)
      if(playerFinalScore > 21){
        console.log((displayArea.innerText = "BUST!"));
        roundOver = true;
      }
    }

    console.log(playerTotalScore);

    if (playerFinalScore > 21) {
      console.log((displayArea.innerText = "BUST!"));
      roundOver = true;
    }
  }

  if (playerTotalScore > 21) {
  }
  console.log("playerTotalScore: " + playerTotalScore);
  shuffledArray.shift([0]);
  console.log("🚀 ~ file: main.js ~ line 121 ~ shuffledArray", shuffledArray);
});

standButton.addEventListener("click", () => {
  displayArea.innerText = "Stand"
  if (dealerTotalScore === 21){

  }

  if(dealerFinalScore < 16){
  
  dealerCards.push(shuffledArray[0])
  shuffledArray.shift([0]);
  
  console.log("EventListener");
  console.log("Dealer: " + dealerCards);
  dealerScore();
  dealerFinalScore = dealerTotalScore;
  dealerCardsDisplayArea.innerText = "Dealer: " + dealerCards;
  console.log("dealerFinalScore: " + dealerFinalScore);
  }
   for (let i = 0; i < dealerCards.length; i++) {
     if (dealerFinalScore === 21 && dealerFinalScore === 21) {
       displayArea.innerText = "PUSH";
     }
     if (dealerCards[i] === 11 && dealerTotalScore > 21) {
       dealerTotalScore = dealerTotalScore - 10;
       dealerFinalScore = dealerTotalScore;
       console.log("dealerFinalScore: " + dealerFinalScore);
       if (dealerFinalScore > 21) {
         console.log((displayArea.innerText = "BUST!"));
         roundOver = true;
       }
     }
   }
  
 

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
