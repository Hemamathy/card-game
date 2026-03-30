/**
 * Represents a single playing card with a rank and suit.
 * Responsibilities:
 * - Validate that both rank and suit are provided
 * - Store the card’s rank and suit as properties
 * - Provide a string representation using suit symbols when available
 * This class is intentionally simple and acts as the fundamental
 * building block for higher‑level components such as Deck or GameEngine.
 */
class Card {
  constructor(rank, suit) {
    //Validate rank and suit are provided, if not throw error
    if (!rank || !suit) throw new Error("Invalid card");
    this.rank = rank;
    this.suit = suit;
  }

  /**
   * Returns a human‑readable string representation of the card.
   * Converts the card’s suit into its symbolic character (♥, ♦, ♣, ♠)
   * when available. 
   * NOTE: If the suit is not recognized, the raw suit name
   * is used instead. The output format is `<rank><symbol>`, such as
   * `A♠` or `10♥`.
   * @returns {string} A formatted string representing the card.
   */
  toString() {
    const suitSymbols = {
      hearts: "♥",
      diamonds: "♦",
      clubs: "♣",
      spades: "♠",
    };
    return `${this.rank}${suitSymbols[this.suit] ?? this.suit}`;
  }
}

module.exports = { Card };
