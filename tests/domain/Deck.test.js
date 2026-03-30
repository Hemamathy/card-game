const { Card } = require("../../src/domain/Card");
const { Deck } = require("../../src/domain/Deck");

describe("Deck", () => {
  test("draw removes a card", () => {
    //Create cards A♠ and K♠
    const cards = [new Card("A", "spades"), new Card("K", "spades")];
    //Create a Deck with the cards A♠ and K♠
    const deck = new Deck(cards);
    //Draw a card from the deck
    const drawn = deck.draw();
    //assert that the drawn card is ether A♠ or K♠
    expect(drawn).toBeInstanceOf(Card);
    //assert that the deck now has one card left
    expect(deck.size()).toBe(1);
  });

  test("initializes with 52 cards", () => {
    //Create a deck
    const deck = new Deck();
    //assert that the deck has 52 cards
    expect(deck.size()).toBe(52);
  });

  test("shuffle changes card order", () => {
    //Create two decks
    const deck1 = new Deck();
    const deck2 = new Deck();
    //Shuffle the scond deck   
    deck2.shuffle();
    //Compare the order of cards in both decks
    const sameOrder = deck1.cards.every(
      (card, index) =>
        card.suit === deck2.cards[index].suit &&
        card.rank === deck2.cards[index].rank
    );
    //assert that the order is not the same after shuffling deck2
    // NOTE:Extremely unlikely this test assertion becomes true after a proper shuffle.
    expect(sameOrder).toBe(false);
  });
});