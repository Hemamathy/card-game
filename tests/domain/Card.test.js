const { Card } = require("../../src/domain/Card");

describe("Card", () => {
  test("creates a card with suit and rank", () => {
    const card = new Card("A", "♠");
    expect(card.rank).toBe("A");
    expect(card.suit).toBe("♠");
  });

  test("throws if suit or rank is missing", () => {
    expect(() => new Card(null, "♠")).toThrow();
    expect(() => new Card("hearts", null)).toThrow(TypeError);
  });

   test("toString returns a readable representation", () => {
    const card = new Card("K", "spades");
    expect(card.toString()).toBe("K♠");
  });

});