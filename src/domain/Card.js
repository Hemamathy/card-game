class Card {
  constructor(rank, suit) {
    if (!rank || !suit) throw new Error("Invalid card");
    this.rank = rank;
    this.suit = suit;
  }

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
