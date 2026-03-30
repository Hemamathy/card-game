const { Card } = require("../../src/domain/Card");
const { Deck } = require("../../src/domain/Deck");

describe("Deck", () => {
  test("draw removes a card", () => {
    const cards = [new Card("A", "spades"), new Card("K", "spades")];
    const deck = new Deck(cards);
    const drawn = deck.draw();
    expect(drawn).toBeInstanceOf(Card);
    expect(deck.size()).toBe(1);
  });

  test("initializes with 52 cards", () => {
    const deck = new Deck();
    expect(deck.size()).toBe(52);
  });

  test("shuffle changes card order", () => {
    const deck1 = new Deck();
    const deck2 = new Deck();    
    deck2.shuffle();

    const sameOrder = deck1.cards.every(
      (card, index) =>
        card.suit === deck2.cards[index].suit &&
        card.rank === deck2.cards[index].rank
    );

    // Extremely unlikely to be true after a proper shuffle.
    expect(sameOrder).toBe(false);
  });
});