
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let player = {
    name: "Meraj",
    chips: 145
}

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el")

playerEl.textContent = `${player.name}: $${player.chips}`

function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let ran = Math.floor(Math.random() * 13) + 1;
    if (ran > 10) return 10;
    else if (ran === 1) return 11;
    else return ran;
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = cards[0] + cards[1];
    renderGame();
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = message;
    cardsEl.textContent = `Cards: `
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ` `;
    }
    sumEl.textContent = "Sum: " + sum;
}
function newCard() {
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    console.log("Drawing a new card from the deck")
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame()
    }
}