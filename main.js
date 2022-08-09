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


*********************
*** stretch goals *** 
*********************

-have multiple players
-leverage an api to show motivational quotes when a button is pressed
-6 deck shoe
-loading page with an ability to create multiple users

*/

const playerCards = [] //holds the players cards //used by the score keeper
const dealerCards = [] //holds the dealers cards //used by the score keeper

let playerWallet = 500


let playerTotalScore = 0
let playerFinalScore = 0
let dealerTotalScore = 0

const fullDeck = [2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11]

let shuffledArray = fullDeck.sort((a, b) => 0.5 - Math.random()); //randomizes the deck //Math.random returns a random number between 0 and 1
const dealtCards = []
const gameOver = false



//QuerySelectors
hitButton = document.querySelector('#hit-button')
standButton = document.querySelector('#stand-button')

// while(gameOver === false){
// for(let i = 0; i < shuffledArray; i++){
//     thePlayer.unshift(shuffledArray[i])
//     console.log(`Player has: ${shuffledArray[i]}`) //show the player their card
//     shuffledArray.shift([i]) // remove the card from the deck
//     theDealer.unshift(shuffledArray[i + 1])
//     console.log(`Dealer has: ${shuffledArray[i + 1]}`)
//     shuffledArray.shift([i + 1])
// }
console.log("🚀 ~ file: main.js ~ line 121 ~ shuffledArray", shuffledArray);

function playerScore(){
    playerTotalScore = playerCards.reduce(function (acc, cur) {//adds all numbers in the array together
    return acc + cur;
    });
    
}
function dealerScore(){
    dealerTotalScore = dealerCards.reduce(function (acc, cur) {
    return acc + cur;
    });
}

playerCards.unshift(shuffledArray[0]) //upshifts the first card to the front of the player arr of cards
console.log(`Player has: ${shuffledArray[0]}`) //show the player their card
playerScore()
console.log("playerTotalScore1: " + playerTotalScore);

dealerCards.unshift(shuffledArray[1])
console.log(`Dealer has: ${shuffledArray[1]}`)
dealerScore()
console.log("dealerTotalScore1: " + dealerTotalScore);
//console.log("🚀 ~ file: main.js ~ line 121 ~ shuffledArray", shuffledArray);


playerCards.unshift(shuffledArray[2])
console.log(`Player has: ${shuffledArray[2]}`)
playerScore()
console.log("playerTotalScore2: " + playerTotalScore);


dealerCards.unshift(shuffledArray[3])
console.log(`Dealer's whole card: ${shuffledArray[3]}`)
dealerScore()


shuffledArray.shift([0]);
shuffledArray.shift([1]);
shuffledArray.shift([2]);
shuffledArray.shift([3]);
console.log("Player: " + playerCards)
console.log("Dealer: " + dealerCards)

//console.log("🚀 ~ file: main.js ~ line 121 ~ shuffledArray", shuffledArray);




console.log('playerTotalScore: ' + playerTotalScore)
console.log('dealerTotalScore: ' + dealerTotalScore)
console.log(shuffledArray.length)





console.log("🚀 ~ file: main.js ~ line 121 ~ shuffledArray", shuffledArray);

console.log("Player: " + playerCards);
console.log("Dealer: " + dealerCards);

console.log("playerTotalScore: " + playerTotalScore);
console.log("dealerTotalScore: " + dealerTotalScore);


hitButton.addEventListener("click", () => {
  playerCards.push(shuffledArray[0]);
  console.log("EventListener");
  console.log("Player: " + playerCards);
  playerScore()
  
  for(let i = 0; i < playerCards.length; i++){
    console.log("inTheForLoop: " + playerCards[i])
    if(playerCards[i] === 11 && playerTotalScore > 21){
        playerTotalScore = playerTotalScore - 10
    }
    console.log(playerTotalScore)
  }
  
  
  
  
  
  if (playerTotalScore > 21){

  }
  console.log("playerTotalScore: " + playerTotalScore);
  shuffledArray.shift([0])
  console.log("🚀 ~ file: main.js ~ line 121 ~ shuffledArray", shuffledArray);
});


// while(scoreKeeper < 22){ 

// thePlayer.unshift(shuffledArray[5])
// console.log(`<<Player has>>: ${shuffledArray[5]}`)
// shuffledArray.shift([5])
// // }
// playerTotalScore = thePlayer.reduce(function(acc, cur){ 
//     return acc + cur
// }) 
// console.log("playerTotalScore: " + playerTotalScore)




// for(let i = 0; i < shuffledArray.length; i++){
    

// }





// }   // <-- for thr while loop 



//createUser("TRod")
//createUser("RamRod")

//console.log(currentPlayers)


// for(let i = 0; i < fullDeck.length; i++){
//     console.log(fullDeck[i])
// }


console.log(shuffledArray.length)





