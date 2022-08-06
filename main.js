/*
BlackJack Game




-create a user
-create a deck of cards with correspoiding blackjack values
    -cards 2,3,4,5,6,7,8,9 = equal their own numerical value
    -cards 10, Jack, Queen, King = 10 //so i'll use 10, 10, 10, 10
    -Ace is equal to 11 or 1
        -will have to use a conditional to let the user determine if they want an 11 or 1
    -total of 52 cards(13 of each suit)   
-I'll load all the card values into an array that i'll randomize. not sure what to do with the ace(1 or 11)
-I'll use the dealtCards arr to keep track each card that was dealt. 
    -the number of cards removed from the deck will be subttracted from the total number of available cards to be dealt from







*** stretch goal *** -landing page with an ability to create a user

*/

const thePlayer = []
const theDealer = []


const fullDeck = [2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11]

const shuffledArray = fullDeck.sort((a, b) => 0.5 - Math.random());
const dealtCards = []
const gameOver = false

// while(gameOver === false){


thePlayer.push(shuffledArray[0])
console.log(`Player has: ${shuffledArray[0]}`)
shuffledArray.pop([0])

theDealer.push(shuffledArray[1])
console.log(`Dealer has: ${shuffledArray[1]}`)
shuffledArray.pop([1])

thePlayer.push(shuffledArray[2])
console.log(`Player has: ${shuffledArray[2]}`)
shuffledArray.pop([2])

theDealer.push(shuffledArray[3])
console.log(`Dealer has: ${shuffledArray[3]}`)
shuffledArray.pop([3])

console.log("Player: " + thePlayer)
console.log("Dealer: " + theDealer)


let playerTotalScore = thePlayer.reduce(function(acc, cur){
    return acc + cur
})
let dealerTotalScore = theDealer.reduce(function(acc, cur){
    return acc + cur
})
console.log(playerTotalScore)
console.log(dealerTotalScore)

// while(scoreKeeper < 22){


// }






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





