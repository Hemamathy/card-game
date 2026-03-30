class Card {
  constructor(rank, suit) {
    if (!rank || !suit) throw new Error("Invalid card");
    this.rank = rank;
    this.suit = suit;
  }
}

module.exports = { Card };
