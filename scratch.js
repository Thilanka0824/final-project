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