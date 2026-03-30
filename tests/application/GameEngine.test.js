const GameEngine = require("../../src/application/GameEngine");
const { Card } = require("../../src/domain/Card");

describe("GameEngine", () => {
  let engine;

  beforeEach(() => {
    engine = new GameEngine();
  });

    test("startNewGame creates and shuffles a new deck", () => {
    //Create a copy of the standard deck that is not shuffled
    const initialDeck = [...engine.deck.cards];
    //Start a new game which should create a new deck and shuffle it
    engine.startNewGame();
    //assert that the new deck has 52 cards
    expect(engine.deck.cards.length).toBe(52);
    //assert that the new deck order(shuffled) is different from the initial deck order
    expect(engine.deck.cards).not.toEqual(initialDeck); // shuffled
  });

  test("player wins when their card rank is higher", () => {
    //Create player Card A♠
    const playerCard = new Card("A", "spades");
    //Create computer Card K♥
    const computerCard = new Card("K", "hearts");
    //Decide the winner based on the card of the player and the computer 
    const result = engine.decideWinner(playerCard, computerCard);
    //assert that the player wins since A is is a higher rank than K
    expect(result).toBe("player");
  });

  test("computer wins when their card rank is higher", () => {
    //Create player Card 5♣
    const playerCard = new Card("5", "clubs");
    //Create computer Card 10♦
    const computerCard = new Card("10", "diamonds");
    //Decide the winner based on the card of the player and the computer
    const result = engine.decideWinner(playerCard, computerCard);
    //assert that the computer wins since 10 is a higher rank than 5
    expect(result).toBe("computer");
  });

  test("returns draw when both cards have the same rank", () => {
    //Create player Card Q♠
    const playerCard = new Card("Q", "spades");
    //Create computer Card Q♥
    const computerCard = new Card("Q", "hearts");
    //Decide the winner based on the card of the player and the computer
    const result = engine.decideWinner(playerCard, computerCard);
    //assert that the result is a draw since both cards have the same rank Q
    expect(result).toBe("draw");
  });
});