let firstCard = randomCard()
let secondCard = randomCard()
let cards = [firstCard, secondCard]
// 1. Create a new array - cards - that contains firstCard and secondCard
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    // 2. Refer to the cards array when rendering out the cards
    for (i = 0; i < cards.length; i++){
        cardsEl.textContent = "Cards: " + cards[i]
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    let card = randomCard()
    sum += card
    renderGame()
}

function randomCard(){
    let randomNumber = Math.floor(Math.random*13) + 1
    return randomCard
}