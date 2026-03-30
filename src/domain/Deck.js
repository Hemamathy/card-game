const { Card } = require("./Card");

class Deck {
  constructor(cards = []) {
     // If cards are passed, use them; otherwise generate a standard deck
    this.cards = cards.length ? [...cards] : this._initializeStandardDeck();
  }

  _initializeStandardDeck() {
    const suits = ["hearts", "diamonds", "clubs", "spades"];
    const ranks = ["A", "2", "3", "4", "5", "6", "7",
                   "8", "9", "10", "J", "Q", "K"];

    this.cards = [];
    for (const suit of suits) {
      for (const rank of ranks) {
        this.cards.push(new Card(rank, suit));
      }
    }
    return this.cards;
  }

  /**
   * Fisher–Yates shuffle for unbiased randomization.
   */
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  draw() {
    return this.cards.length > 0 ? this.cards.pop() : null;
  }

  size() {
    return this.cards.length;
  }
}

module.exports = { Deck };