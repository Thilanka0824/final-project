const apiURL = "https://zenquotes.io/api/quotes/";

async function getAPI(url) {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
}

getAPI(apiURL);

let playerCards = []; //holds the players cards //used by the score keeper
let dealerCards = []; //holds the dealers cards //used by the score keeper

let playerWallet = 0;

let playerTotalScore = 0;
let playerFinalScore = 0;
let dealerTotalScore = 0;

const fullDeck = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10,
  10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8,
  9, 10, 10, 10, 10, 11,
];

//randomizes the deck //Math.random returns a random number between 0 and 1
let shuffledArray = fullDeck.sort((a, b) => 0.5 - Math.random());

let dealtCards = [];
let roundOver = false;
let dealOver = false;
let betMade = false;

/***********************/
/*** QUERY SELECTORS ***/
/***********************/

let hitButton = document.querySelector("#hit-button");
let standButton = document.querySelector("#stand-button");
let dealCardsButton = document.querySelector("#deal-cards-button");
let nextRoundButton = document.querySelector("#next-round-button");
let motivateButton = document.querySelector("#quote-button");

let betButton = document.querySelector("#bet-button");
let fiftyButton = document.querySelector("#fifty-button");
let hundredButton = document.querySelector("#hundred-button");
let twoFiftyButton = document.querySelector("#two-fifty-button");

let displayArea = document.querySelector("#display-area-div");
let playerCardsDisplayArea = document.querySelector("#player-1-text");
let dealerCardsDisplayArea = document.querySelector("#dealer-text");

let wallet = document.querySelector("#wallet");
let wagerDiv = document.querySelector("#wager-div");

let suitPic = document.querySelector("#suit-pic");

playerWallet = { cash: 500 };
wager = { amount: 0 };

displayArea.innerText = "Place your Bet!";

/***********************/
/*** WAGER FUNCTIONS ***/
/***********************/

function betFifty() {
  if (betMade === false) {
    playerWallet.cash = playerWallet.cash - 50;
    wallet.innerText = `$${playerWallet.cash}`;
    wager.amount = 50;
    wagerDiv.innerText = `$${wager.amount}`;
    betMade = true;
    displayArea.innerText = "Press Deal to Start Game";
  }
}


function betHundred() {
  if (betMade === false) {
    playerWallet.cash = playerWallet.cash - 100;
    wallet.innerText = `$${playerWallet.cash}`;
    wager.amount = 100;
    wagerDiv.innerText = `$${wager.amount}`;
    betMade = true;
    displayArea.innerText = "Press Deal to Start Game";
  }
}

function betTwoFifty() {
  if (betMade === false) {
    playerWallet.cash = playerWallet.cash - 250;
    wallet.innerText = `$${playerWallet.cash}`;
    wager.amount = 250;
    wagerDiv.innerText = `$${wager.amount}`;
    betMade = true;
    displayArea.innerText = "Press Deal to Start Game";
  }
}

/*******************/
/*** BET BUTTONS ***/
/*******************/

betButton.addEventListener("click", () => {
  console.log("hi");
});
console.log(shuffledArray.length);

fiftyButton.addEventListener("click", () => {
  console.log("$50");
  betFifty();
});
hundredButton.addEventListener("click", () => {
  console.log("$100");
  betHundred();
});
twoFiftyButton.addEventListener("click", () => {
  console.log("$250");
  betTwoFifty();
});

dealerCardsDisplayArea.innerText = "Dealer";
playerCardsDisplayArea.innerText = "Player";
wallet.innerText = `$${playerWallet.cash}`;
wagerDiv.innerText = `BET $${wager.amount}`;

/*******************/
/*** DEAL BUTTON ***/
/*******************/

dealCardsButton.addEventListener("click", () => {
  if (betMade === false) {
    displayArea.innerText = "PLACE A BET";
    dealerCardsDisplayArea.innerText = "Dealer";
    playerCardsDisplayArea.innerText = "Player";
    wallet.innerText = `$${playerWallet.cash}`;
    wagerDiv.innerText = `BET $${wager.amount}`;
  }
  if (dealOver === false && betMade === true) {
    dealInitialCards();
    dealOver = true;
  }
});

/******************/
/*** HIT BUTTON ***/
/******************/

hitButton.addEventListener("click", () => {
  if (betMade === false) {
    displayArea.innerText = "PLACE A BET";
    dealerCardsDisplayArea.innerText = "Dealer";
    playerCardsDisplayArea.innerText = "Player";
    wallet.innerText = `$${playerWallet.cash}`;
    wagerDiv.innerText = `BET $${wager.amount}`;
  }

  if (dealOver === true && betMade === true) {
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
          //hitButton.removeEventListener();
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
        displayArea.innerText = "You Busted =(";
        wager.amount = 0;
        wagerDiv.innerText = `$${wager.amount}`;
        wallet.innerText = `$${playerWallet.cash}`;
        roundOver = true;
        displayArea.innerText = "Press Next to continue";
      }
      console.log("playerTotalScore: " + playerTotalScore);
      //shuffledArray.shift([0]);
      console.log(
        "🚀 ~ file: main.js ~ line 121 ~ shuffledArray",
        shuffledArray
      );

      compareForWinner();
    }, 500);
  }
});

/********************/
/*** STAND BUTTON ***/
/********************/

standButton.addEventListener("click", () => {
  if (betMade === false) {
    displayArea.innerText = "PLACE A BET";
    dealerCardsDisplayArea.innerText = "Dealer";
    playerCardsDisplayArea.innerText = "Player";
    wallet.innerText = `$${playerWallet.cash}`;
    wagerDiv.innerText = `BET $${wager.amount}`;
  }

  if (dealOver === true && betMade === true) {
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
          displayArea.innerText = "PUSH 2";
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
    }, 800);
  }
});

compareForWinner();

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

  setTimeout(function () {
    dealerCards.unshift(shuffledArray[1]);
    dealerScore();
    dealerCardsDisplayArea.innerText =
      "Dealer: " + dealerCards + " Total: " + dealerTotalScore;
  }, 2400);

  setTimeout(function () {
    playerCards.unshift(shuffledArray[2]);
    playerScore();
    playerCardsDisplayArea.innerText =
      "Player 1:   " + playerCards + " Total: " + playerTotalScore;
  }, 3600);

  setTimeout(function () {
    dealerCards.unshift(shuffledArray[3]);
    dealerScore();
    dealerCardsDisplayArea.innerText =
      "Dealer: " + dealerCards + " Total: " + dealerTotalScore;
  }, 4800);

  setTimeout(function () {
    shuffledArray.shift([0]);
    shuffledArray.shift([1]);
    shuffledArray.shift([2]);
    shuffledArray.shift([3]);

    compareForWinner();

    if (playerTotalScore === 21 && dealerTotalScore === 21) {
      displayArea.innerText = "PUSH 2";
    }
  }, 4801);

  setTimeout(function () {
    displayArea.innerText = "HIT or STAND?";
  }, 5600);
}

/**************************/
/*** COMPARE FOR WINNER ***/
/**************************/

function compareForWinner() {
  if (roundOver === true) {
    if (playerTotalScore > 21) {
      winFinisher();
    } else if (dealerTotalScore > 21) {
      displayArea.innerText = "Dealer BUSTS!";
      playerWallet.cash += wager.amount * 2;
      winFinisher();
    } else if (playerTotalScore === 21) {
      displayArea.innerText = "BLACKJACK";
      playerWallet.cash += wager.amount * 2.5;
      winFinisher();
    } else if (dealerTotalScore === playerTotalScore) {
      displayArea.innerText = "PUSH";
      playerWallet.cash += wager.amount;
      winFinisher();
    } else if (playerTotalScore > dealerTotalScore) {
      displayArea.innerText = "PLAYER WINS!!!";
      playerCardsDisplayArea.innerText = "Winner!";
      playerWallet.cash += wager.amount * 2;
      winFinisher();
    } else if (playerTotalScore < dealerTotalScore) {
      displayArea.innerText = "Dealer wins";
      dealerCardsDisplayArea.innerText = "Dealer: " + dealerCards;
      winFinisher();
    }
  }
}

/*****************************/
/*** WIN FINISHER FUNCTION ***/
/*****************************/

function winFinisher() {
  wager.amount = 0;
  wagerDiv.innerText = `$${wager.amount}`;
  wallet.innerText = `$${playerWallet.cash}`;
  roundOver = true;
  displayArea.innerText = "Press Next to continue";
}

/***************************/
/*** NEXT ROUND FUNCTION ***/
/***************************/

function nextRound() {
  if (dealOver === true && betMade === true && roundOver === true) {
    playerCards = [];
    dealerCards = [];
    playerTotalScore = 0;
    dealerTotalScore = 0;

    displayArea.innerText = "Place your Bet!";
  }
  dealOver = false;
  betMade = false;
  roundOver = false;
}

/*************************/
/*** NEXT ROUND BUTTON ***/
/*************************/

nextRoundButton.addEventListener("click", () => {
  console.log("hey");
  nextRound();
  dealerCardsDisplayArea.innerText = "Dealer";
  playerCardsDisplayArea.innerText = "Player";
});

/****************************/
/*** KEEP SCORE FUNCTIONS ***/
/****************************/

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

/********************/
/*** MOTIVATE ME! ***/
/********************/

motivateButton.addEventListener("click", () => {
  console.log("yo yo");
  console.log(apiURL);
});
