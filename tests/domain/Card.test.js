const { Card } = require("../../src/domain/Card");

describe("Card", () => {
  test("creates a valid card", () => {
    const card = new Card("A", "♠");
    expect(card.rank).toBe("A");
    expect(card.suit).toBe("♠");
  });

  test("throws for invalid card", () => {
    expect(() => new Card(null, "♠")).toThrow();
  });
});