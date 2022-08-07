/*
************************
**   BlackJack Game   **
************************

-create a user
    -starts with $500
-create a function to add or subtract the n amount of money from the userMoney variable
    -userMoney will start with $500
    -money will added when the user wins, subracted when they lose
-create a scoreKeeper variable to keep track of how many points each player has.
    -this will determine if the user wins or loses the game 


-create a deck of cards with correspoiding blackjack values
    -cards 2,3,4,5,6,7,8,9 = equal their own numerical value
    -cards 10, Jack, Queen, King = 10 //so i'll use 10, 10, 10, 10
    -Ace is equal to 11 or 1
        -will have to use a conditional to let the user determine if they want an 11 or 1
    -total of 52 cards(13 of each suit)   
-load all the card values into an array that i'll randomize. not sure what to do with the ace(1 or 11)

-use the dealtCards arr to keep track each card that was dealt. 
    -the number of cards removed from the deck will be subttracted from the total number of available cards to be dealt from

-user makes bet (starting value of $50)


-deal the starting cards from shuffledArray 
    -1 to the player, 1 to the dealer, 1 to the player, 1 to the dealer(whole card. will not be visible to player)
-put dealt cards into respective players card array(holds cards to be added up for total score)
-remove dealt cards from shuffleArray (.pop)

#game rules
-if player has 21(a "natural"), and the dealer does not, he wins 1.5 times their bet

-if the dealer has 21, they collect the bets of every player, that does not have a natural

-if the dealer and a player BOTH have a natural, that players bet is returned







*** stretch goal *** -landing page with an ability to create a user

*/

const thePlayer = [] //holds the players cards //used by the score keeper
const theDealer = [] //holds the dealers cards //used by the score keeper


const fullDeck = [2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11]

const shuffledArray = fullDeck.sort((a, b) => 0.5 - Math.random()); //randomizes the deck //sort
const dealtCards = []
const gameOver = false

//QuerySelertors
// hitButton = document.querySelector('#hit-button')
// standButton = document.querySelector('#stand-button')

// while(gameOver === false){
// for(let i = 0; i < shuffledArray; i++){
//     thePlayer.push(shuffledArray[i])
//     console.log(`Player has: ${shuffledArray[i]}`) //show the player their card
//     shuffledArray.pop([i]) // remove the card from the deck
//     theDealer.push(shuffledArray[i + 1])
//     console.log(`Dealer has: ${shuffledArray[i + 1]}`)
//     shuffledArray.pop([i + 1])
// }

thePlayer.push(shuffledArray[0]) //pushes the first card to the player arr of cards
console.log(`Player has: ${shuffledArray[0]}`) //show the player their card
shuffledArray.pop([0]) // remove the card from the deck

theDealer.push(shuffledArray[1])
console.log(`Dealer has: ${shuffledArray[1]}`)
shuffledArray.pop([1])

thePlayer.push(shuffledArray[2])
console.log(`Player has: ${shuffledArray[2]}`)
shuffledArray.pop([2])

theDealer.push(shuffledArray[3])
console.log(`Dealer's whole card: ${shuffledArray[3]}`)
shuffledArray.pop([3])



console.log("Player: " + thePlayer)
console.log("Dealer: " + theDealer)


let playerTotalScore = thePlayer.reduce(function(acc, cur){ //adds all numbers in the array together
    return acc + cur
}) 
let dealerTotalScore = theDealer.reduce(function(acc, cur){
    return acc + cur
})
console.log(playerTotalScore)
console.log(dealerTotalScore)

// while(scoreKeeper < 22){

thePlayer.push(shuffledArray[5])
console.log(`<<Player has>>: ${shuffledArray[5]}`)
shuffledArray.pop([5])
// }
playerTotalScore = thePlayer.reduce(function(acc, cur){ 
    return acc + cur
}) 
console.log("playerTotalScore: " + playerTotalScore)




// for(let i = 0; i < shuffledArray.length; i++){
    

// }





// }   // <-- for thr while loop 



//createUser("TRod")
//createUser("Dage")

//console.log(currentPlayers)


// for(let i = 0; i < fullDeck.length; i++){
//     console.log(fullDeck[i])
// }


console.log(shuffledArray.length)





