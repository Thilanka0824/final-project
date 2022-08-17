// const fullDeck = [2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11]


// const theDealer = {
//     userName: 'dealer',
//     cash: 1
// }

// function createUser(userNm){
//     let user = {
//         userName: userNm,
//         cash: 500
//     }
    
//     currentPlayers.push(user)
//     return user
// }


//////////////////////
/*
************************
**   BlackJack Game   **
************************

-create a user
    -starts with $500
-create a function to add or subtract the n amount of money from the userMoney variable
    -userMoney will start with $500
    -money will added when the user wins, subtracted when they lose
-create a scoreKeeper variable to keep track of how many points each player has.
    -this will determine if the user wins or loses the game 


-create a deck of cards with corresponding blackjack values
    -cards 2,3,4,5,6,7,8,9 = equal their own numerical value
    -cards 10, Jack, Queen, King = 10 //so i'll use 10, 10, 10, 10
    -Ace is equal to 11 or 1
        -will have to use a conditional to let the user determine if they want an 11 or 1
    -total of 52 cards(13 of each suit)   
-load all the card values into an array that i'll randomize. not sure what to do with the ace(1 or 11)

-use the dealtCards arr to keep track each card that was dealt. 
    -will be used to keep track of html id's of each card that was dealt

-user makes bet (starting value of $50)
    -save bet amount in playerBet variable
        -add/subtract that amount from playerWallet after the hand ends
        -reset playerBet back to $50


-deal the starting cards from shuffledArray 
    -1 to the player, 1 to the dealer, 1 to the player, 1 to the dealer(whole card. will not be visible to player)
-put dealt cards into respective players card array(holds cards to be added up for total score)
-remove dealt cards from shuffleArray (.shift)

##########################################

** game rules **

-if player has 21(a "natural"), and the dealer does not, he wins 1.5 times their bet

-if the dealer has 21, they collect the bets of every player, that does not have a natural

-if the dealer and a player BOTH have a natural, that players bet is returned

##########################################

-conditional natural 21
    
    -player && dealer
        if(playerTotalScore === 21 && dealerTotalScore === 21){
        .unshift
            add 0 to playerWallet
        }

    -player
        -if(playerTotalScore === 21){
            player wins!
            add bet amount TIMES 1.5 to playerWallet
        
        }

    -dealer
        -if(dealerTotalScore === 21){
            subtract bet amount from all players that don't have 21

        }

-if no naturals are present
  
    while(gameOver = false ){          
        
        -player is asked if they want to "stand" or "hit"
            -if (player === "stand"){
                then continue 
        }
        else if (player === "hit"){
            add first number in shuffleArray to thePlayerCards
            show player their card
            check if(playerCards) has an 11 in it
                -ace adjuster

        }
    
    }


 -if the player the player or dealer has an 11(Ace that could be a 1 or 11), it will need to dynamically change. 
        -prompting the user would be too cumbersome 
        -if playerTotalScore is greater than 10, all incoming aces are equal to 1
        -if the player has an ace, and exceeds 21 on the next card, i'll subtract 10 from the ace
-i'll need to keep track of the ace issue in a separate function and only add to the total score once ace calculations are complete for both sides
        -then add to the totalScore


-if the player chooses to stand AND player score is less than 21
    -then move on to the dealers turn

-if dealer score is 17 or more, dealer stands.
        -if player score is more than dealer score. player wins
            -adds bet amount to player wallet
            -will need a function to handle all the resets 
        
        -if player score is less than the dealer, dealer wins
            -player bet is subtracted from player wallet
            -bet resets

-if the dealer score is less than 17, dealer takes another card
    -the dealer will continue to hit until their score is 17 or more
        -ace logic will apply here
    -if the dealer busts, then every player that is still in the game wins
        -adds bet amount to payer wallet
        -resets the everything for a new round.

-will use two diff resets.
    -one to reset the round.
        -reset bet amount
        -clear the cards for the round
    -one to reset the game
        -after a a player loses all their money OR a player presses the New game button
            -reset bet amount
            -reset player wallet to $500
            -reset all the cards being shown
            -re-shuffle the shuffledArray
            -reset Scorekeeper variables


*/

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
let dealerFinalScore = 0;

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

wallet.cash += wager.amount * 2;

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

dealerCardsDisplayArea.innerText = "Dealer";
playerCardsDisplayArea.innerText = "Player";
wallet.innerText = `$${playerWallet.cash}`;
wagerDiv.innerText = `BET $${wager.amount}`;

console.log("playerTotalScore: " + playerTotalScore);
console.log("dealerTotalScore: " + dealerTotalScore);
console.log(shuffledArray.length);

console.log("🚀 ~ file: main.js ~ line 121 ~ shuffledArray", shuffledArray);

console.log("Player: " + playerCards);
console.log("Dealer: " + dealerCards);

console.log("playerTotalScore: " + playerTotalScore);
console.log("dealerTotalScore: " + dealerTotalScore);

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
  //displayArea.innerText = "";
});

/******************/
/*** HIT BUTTON ***/
/******************/
hitButton.addEventListener("click", () => {
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
  //displayArea.innerText = "Stand";
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
  playerCardsDisplayArea.innerText = "";
  dealerCardsDisplayArea.innerText = "";
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
