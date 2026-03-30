const { Card } = require("../../src/domain/Card");

describe("Card", () => {
  test("creates a card with suit and rank", () => {
    //Create A♠ card 
    const card = new Card("A", "spades");
    //Assert that the created card rank is A and suit is spade(♠)
    expect(card.rank).toBe("A");
    expect(card.suit).toBe("spades");
  });

  test("throws if suit or rank is missing", () => {
    //assert that creating a card with a missing rank throws an error 
    expect(() => new Card(null, "spades")).toThrow();
    //assert that creating a card with a missing suit throws an error
    expect(() => new Card("A", null)).toThrow();
  });

   test("toString returns a readable representation", () => {
    //Create K♠ card
    const card = new Card("K", "spades");
    //assert that the card is K♠
    expect(card.toString()).toBe("K♠");
  });

});