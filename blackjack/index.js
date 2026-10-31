// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
let firstCard = 8
let secondCard = 13
let age = 22
// 2. Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard

if (sum < 21) {

    console.log("New Card?")

} else if (sum === 21) {
    console.log("BlackJack")
} else if (sum > 21) {
    console.log("Loser!")
}

/*------ Age Check ----- */
if (age >= 21) {
    console.log("Welcome to the club. Good Luck!")
} else {
    console.log("Sorry you must be 21 or older to enter!")
}

/*----- King Harald Birthday Greeting -----*/
let bdayAge = 100
if (bdayAge = 100) {
    console.log("Here is your birthday card from the King!")
} else if (bdayAge > 100) {
    console.log('You got one already, you greedy bastard. Happy Birthday')

} else console.log('Not Eligible')
/*----- black jack if statements -----*/

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"
if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum = 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
} else {
    console.log("You're out of the game! 😭")
}

class Game {
    constructor() {
        this.players = [];
        this.initialize();
    }
    initialize() {
        this.players = [];

    }
}

class Deck {
    constructor() {
        this.cards = [];
        this.initialize();
    }

    //  Populates the deck
    initialize() {
        this.cards = [];
        for (let suit = 4; suit > 0; suit--) {
            for (let rank = 13; rank > 0; rank--) {
                this.cards.push({ suit, rank }); // Shorthand property name
            }
        }
    }

    //  Fisher-Yates Shuffle
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            // In-place swap using array destructuring
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    deal() {
        if (this.cards.length === 0) {
            // Optional safety check: re-initialize and shuffle if empty, or return null
            this.initialize();
            this.shuffle();
        }
        return this.cards.pop();
    }
}

class Hand {
    constructor() {
        this.cards = [];

    }
    addCard(card) {
        this.cards.push(card);
    }
    reset() {
        this.cards = [];
    }
    getCardValue(card) {

        if (card.rank === 1) {
            return 11;
        } else if (card.rank > 10) {
            return 10;
        }
        else {
            return card.rank;
        }
    }

    getScore() {
        let ttl = 0
        let aceCount = 0;
        for (let i = 0; i < this.cards.length; i++) {
            ttl += this.getCardValue(this.cards[i]);
            if (this.cards[i].rank === 1) {
                aceCount++;
            }
        }
        while (ttl > 21 && aceCount > 0) {
            tt -= 10;
            aceCount--;

        }

        return ttl;
    }
}
class Player {
    constructor(name, bankroll = 100) {
        this.name = name;
        this.bankroll = bankroll;
        this.currentBet = 0;
        this.hand = new Hand(); // Composition: Player "has-a" Hand
    }

    placeBet(amount) {
        if (amount > 0 && amount <= this.bankroll) {
            this.bankroll -= amount;
            this.currentBet += amount;
        }
    }
    winBet() {
        this.bankroll += this.currentBet * 2;
        this.currentBet = 0;
    }
    loseBet() {
        this.currentBet = 0;
    }
    pushBet() {
        this.bankroll += this.currentBet
        this.currentBet = 0;
    }
}
class Dealer {
    constructor() {
        this.hand = new Hand();
    }
    shouldHit() {
        return this.hand.getScore() < 17;
    }
}
class GameManager {
    constructor() {
        /*   No.of Players playing
        player hands
   */
        this.cards = [];
        this.initialize();
    }
}



// How to use it:
const myDeck = new Deck();
myDeck.shuffle();
const myHand = new Hand();
for (let index = 2; index > 0; index--) {
    myHand.addCard(myDeck.deal());
};
//console.log(myHand.getScore());
console.log(myHand.cards);
console.log(myHand.getCardValue(myHand.cards[0]));
console.log(myHand.getScore());
