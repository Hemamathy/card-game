class Deck {
  constructor(cards = []) {
    this.cards = [...cards];
  }

  draw() {
    return this.cards.pop() ?? null;
  }

  size() {
    return this.cards.length;
  }
}

module.exports = { Deck };