const { Card } = require("../../src/domain/Card");

describe("Card", () => {
  test("creates a card with suit and rank", () => {
    const card = new Card("A", "spades");
    expect(card.rank).toBe("A");
    expect(card.suit).toBe("spades");
  });

  test("throws if suit or rank is missing", () => {
    expect(() => new Card(null, "spades")).toThrow();
    expect(() => new Card("A", null)).toThrow(TypeError);
  });

   test("toString returns a readable representation", () => {
    const card = new Card("K", "spades");
    expect(card.toString()).toBe("K♠");
  });

});