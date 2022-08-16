let playerCards = []; //holds the players cards //used by the score keeper
let dealerCards = []; //holds the dealers cards //used by the score keeper

let playerWallet = 0;

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
let dealOver = false

/***********************/
/*** QUERY SELECTORS ***/
/***********************/

let hitButton = document.querySelector("#hit-button");
let standButton = document.querySelector("#stand-button");
let dealCardsButton = document.querySelector("#deal-cards");

let displayArea = document.querySelector("#display-area-div");
let playerCardsDisplayArea = document.querySelector("#player-1-text");
let wallet = document.querySelector("#wallet");
let wagerDiv = document.querySelector("#wager-div")
let suitPic = document.querySelector("#suit-pic");
let dealerCardsDisplayArea = document.querySelector("#dealer-text");
let betButton = document.querySelector("#bet-button");
let fiftyButton = document.querySelector("#fifty-button");
let hundredButton = document.querySelector("#hundred-button");
let twoFiftyButton = document.querySelector("#two-fifty-button");
//console.log("🚀 ~ file: main.js ~ line 121 ~ shuffledArray", shuffledArray);

playerWallet = {cash: 500};
wager = {amount: 0}

displayArea.innerText = "Place your Bet!"
function betFifty(){
  playerWallet.cash = playerWallet.cash - 50
  wallet.innerText = `$${playerWallet.cash}`;
  wager.amount = 50
  wagerDiv.innerText = `$${wager.amount}`;
}

function betHundred() {
  playerWallet.cash = playerWallet.cash - 100;
  wallet.innerText = `$${playerWallet.cash}`;
  wager.amount = 100;
  wagerDiv.innerText = `$${wager.amount}`;
}

function betTwoFifty() {
  playerWallet.cash = playerWallet.cash - 250;
  wallet.innerText = `$${playerWallet.cash}`;
  wager.amount = 250;
  wagerDiv.innerText = `$${wager.amount}`;
}
displayArea.innerText

//displayArea.innerText = "Press Deal to Start Game";
dealerCardsDisplayArea.innerText = "Dealer";
playerCardsDisplayArea.innerText = "Player";
wallet.innerText = `$${playerWallet.cash}`;
wagerDiv.innerText = `BET $${wager.amount}`;

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


/*******************/
/*** HIT BUTTON ***/
/*******************/
hitButton.addEventListener("click", () => {
  setTimeout(function () {
    playerCards.push(shuffledArray[0]);
    shuffledArray.shift([0]);
    console.log("EventListener");
    console.log("Player: " + playerCards);
    playerScore();

    playerCardsDisplayArea.innerText =
      "Player 1:   " + playerCards + " Total: " + playerTotalScore;

    //Loop to deal with Ace Logic
    for (let i = 0; i < playerCards.length; i++) {
      console.log("inTheForLoop: " + playerCards[i]);

      if (playerTotalScore === 21) {
        displayArea.innerText = "BLACKJACK!!!";
        roundOver = true;
        hitButton.removeEventListener();
      }
      if (playerCards[i] === 11 && playerTotalScore > 21) {
        playerTotalScore = playerTotalScore - 10;

        console.log("playerTotalScore: " + playerTotalScore);
        playerCardsDisplayArea.innerText =
          "Player 1:   " + playerCards + " Total: " + playerTotalScore;

        if (playerTotalScore > 21) {
          console.log((displayArea.innerText = "BUST! 1"));
          roundOver = true;
        }
      }

      console.log(playerTotalScore);
    }

    if (playerTotalScore > 21) {
      roundOver = true;
    }
    console.log("playerTotalScore: " + playerTotalScore);
    //shuffledArray.shift([0]);
    console.log("🚀 ~ file: main.js ~ line 121 ~ shuffledArray", shuffledArray);

    compareForWinner();
  }, 500);
});

/*******************/
/*** STAND BUTTON ***/
/*******************/
standButton.addEventListener("click", () => {
  //displayArea.innerText = "Stand";
  setTimeout(function () {
    while (dealerTotalScore < 17) {
      dealerCards.push(shuffledArray[0]);
      shuffledArray.shift([0]);

      console.log("Stand Button EventListener");
      console.log("Dealer: " + dealerCards);
      dealerScore();

      dealerCardsDisplayArea.innerText =
        "Dealer: " + dealerCards + " Total: " + dealerTotalScore;
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
  },800);
});

dealCardsButton.addEventListener("click", () => {
  if(dealOver === false){
  dealInitialCards();
  }
  displayArea.innerText = "";
  dealOver = true
});

/*******************/
/*** BET BUTTON ***/
/*******************/

betButton.addEventListener("click", () => {
  console.log("hi");
});
console.log(shuffledArray.length);

fiftyButton.addEventListener("click", () => {
  console.log("$50")
  betFifty()
})
hundredButton.addEventListener("click", () => {
  console.log("$100")
  betHundred()
})
twoFiftyButton.addEventListener("click", () => {
  console.log("$250")
  betTwoFifty()
})


compareForWinner();

/*****************/
/*** FUNCTIONS ***/
/*****************/


/**************************/
/*** DEAL INITIAL CARDS ***/
/**************************/

function dealInitialCards() {
  setTimeout(function () {
    playerCards.unshift(shuffledArray[0]);
    playerScore();
    playerCardsDisplayArea.innerText =
      "Player 1:   " + playerCards + " Total: " + playerTotalScore;
  }, 800); //unshifts the first card to the front of the player arr of cards
  //console.log(`Player has: ${shuffledArray[0]}`); //show the player their card

  //console.log("playerTotalScore1: " + playerTotalScore);
  //console.log("playerFinalScore1: " + playerTotalScore);

  setTimeout(function () {
    dealerCards.unshift(shuffledArray[1]);
    dealerScore();
    dealerCardsDisplayArea.innerText =
      "Dealer: " + dealerCards + " Total: " + dealerTotalScore;
  }, 2400);

  //console.log(`Dealer has: ${shuffledArray[1]}`);

  //console.log("dealerTotalScore1: " + dealerTotalScore);
  //console.log("🚀 ~ file: main.js ~ line 121 ~ shuffledArray", shuffledArray);

  setTimeout(function () {
    playerCards.unshift(shuffledArray[2]);
    playerScore();
    playerCardsDisplayArea.innerText =
      "Player 1:   " + playerCards + " Total: " + playerTotalScore;
  }, 3600);

  // playerCards.unshift(shuffledArray[2]);
  // //console.log(`Player has: ${shuffledArray[2]}`);
  // playerScore();
  // //console.log("playerTotalScore2: " + playerTotalScore);
  // //console.log("playerFinalScore2: " + playerTotalScore);
  // playerCardsDisplayArea.innerText =
  //   "Player 1:   " + playerCards + " Total: " + playerTotalScore;

  setTimeout(function () {
    dealerCards.unshift(shuffledArray[3]);
    dealerScore();
    dealerCardsDisplayArea.innerText =
      "Dealer: " + dealerCards + " Total: " + dealerTotalScore;
  }, 4800);
  // dealerCards.unshift(shuffledArray[3]);
  // //console.log(`Dealer's whole card: ${shuffledArray[3]}`);
  // dealerScore();
  // dealerCardsDisplayArea.innerText =
  //   "Dealer: " + dealerCards + " Total: " + dealerTotalScore;
  setTimeout(function () {
    shuffledArray.shift([0]);
    shuffledArray.shift([1]);
    shuffledArray.shift([2]);
    shuffledArray.shift([3]);

    if(playerTotalScore === 21 && dealerTotalScore === 21){
      displayArea.innerText = "PUSH"
    }
    
  }, 4801);

  setTimeout(function () {
    displayArea.innerText = "HIT or STAND?";
  }, 5600)

  //console.log("Player: " + playerCards);
  //console.log("Dealer: " + dealerCards);
}

//
/**************************/
/*** Compare for Winner ***/
/**************************/

function compareForWinner() {
  if (roundOver === true) {
    if (playerTotalScore > 21) {
      displayArea.innerText = "You Busted =(";
      wager.amount = 0
      wagerDiv.innerText = `$${wager.amount}`;
      wallet.innerText = `$${playerWallet.cash}`;
    } else if (dealerTotalScore > 21) {
      displayArea.innerText = "Dealer BUSTS!";
      wallet.cash += wager.amount * 2
      wagerDiv.innerText = `$${wager.amount}`;
      wallet.innerText = `$${playerWallet.cash}`;
    } else if (dealerTotalScore === playerTotalScore) {
      displayArea.innerText = "PUSH";
      wallet.cash += wager.amount;
      wagerDiv.innerText = `$${wager.amount}`;
      wallet.innerText = `$${playerWallet.cash}`;
    } else if (playerTotalScore > dealerTotalScore) {
      displayArea.innerText = "PLAYER WINS!!!";
      playerCardsDisplayArea.innerText = "Winner!";
       wallet.cash += wager.amount * 2;
       wagerDiv.innerText = `$${wager.amount}`;
       wallet.innerText = `$${playerWallet.cash}`;
    } else if (playerTotalScore < dealerTotalScore) {
      displayArea.innerText = "Dealer wins";
      dealerCardsDisplayArea.innerText = "Dealer: " + dealerCards;
      wager.amount = 0;
      wagerDiv.innerText = `$${wager.amount}`;
      wallet.innerText = `$${playerWallet.cash}`;
    }
  }
}

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

/*

*********************
*** stretch goals *** 
*********************

-have multiple players
-leverage an api to show motivational quotes when a button is pressed
-6 deck shoe
-loading page with an ability to create multiple users

*/
