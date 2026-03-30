const { Card } = require("../../src/domain/Card");
const { Deck } = require("../../src/domain/Deck");

describe("Deck", () => {
  test("draw removes a card", () => {
    const cards = [new Card("A", "♠"), new Card("K", "♠")];
    const deck = new Deck(cards);

    const drawn = deck.draw();

    expect(drawn).toBeInstanceOf(Card);
    expect(deck.size()).toBe(1);
  });
});