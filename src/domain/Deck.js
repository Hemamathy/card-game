const { Card } = require("./Card");

/**
 * Represents a standard deck of playing cards.
 * Responsibilities:
 * - Initialize a full 52‑card deck (or accept a custom card list)
 * - Provide card shuffle
 * - Allow drawing cards from the top of the deck
 * - Expose the current deck size
 * This class is intentionally lightweight and focused only on
 * card‑management logic, keeping game rules in higher‑level components.
 */
class Deck {
  constructor(cards = []) {
     // If cards are passed, use them to generate the deck; otherwise generate a standard deck
    this.cards = cards.length ? [...cards] : this._initializeStandardDeck();
  }

   /**
   * Initializes a standard 52‑card deck.
   * Combines all suits and ranks to generate every valid card in a
   * traditional playing deck. This method is called automatically
   * when no custom card list is provided to the constructor.
   * @returns {Card[]} An array containing all 52 cards in the deck.
   */
  _initializeStandardDeck() {
    //create the suits for the card game
    const suits = ["hearts", "diamonds", "clubs", "spades"];
    //create the rank for the card game
    const ranks = ["A", "2", "3", "4", "5", "6", "7",
                   "8", "9", "10", "J", "Q", "K"];
    //genarate the standard deck of 52 cards by combining each suit with each rank
    this.cards = [];
    for (const suit of suits) {
      for (const rank of ranks) {
        this.cards.push(new Card(rank, suit));
      }
    }
    return this.cards;
  }

  /**
   * Randomizes the order of cards in the deck using the Fisher–Yates shuffle.
   * This algorithm provides an unbiased shuffle by iterating backward
   * through the deck and swapping each card with a randomly selected
   * earlier position (including itself). The operation change(mutates) the
   * existing deck in place.
   */
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  /**
   * Removes and returns the top card from the deck.
   * If the deck still contains cards, the last card in the internal
   * array is removed and returned. If the deck is empty, the method
   * returns `null` instead of throwing an error.
   * @returns {Card|null} The drawn card, or `null` if the deck is empty.
   */
  draw() {
    return this.cards.length > 0 ? this.cards.pop() : null;
  }

  /**
   * Returns the number of cards currently in the deck.
   * This reflects the current state of the deck after any
   * shuffling, drawing, or custom initialization.
   * @returns {number} The total count of remaining cards.
   */
  size() {
    return this.cards.length;
  }
}

module.exports = { Deck };