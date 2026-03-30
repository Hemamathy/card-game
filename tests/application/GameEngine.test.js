const GameEngine = require("../../src/application/GameEngine");
const { Card } = require("../../src/domain/Card");

describe("GameEngine.decideWinner", () => {
  let engine;

  beforeEach(() => {
    engine = new GameEngine();
  });

  test("player wins when their card rank is higher", () => {
    const playerCard = new Card("A", "spades");
    const computerCard = new Card("K", "hearts");

    const result = engine.decideWinner(playerCard, computerCard);

    expect(result).toBe("player");
  });

  test("computer wins when their card rank is higher", () => {
    const playerCard = new Card("5", "clubs");
    const computerCard = new Card("10", "diamonds");

    const result = engine.decideWinner(playerCard, computerCard);

    expect(result).toBe("computer");
  });

  test("returns draw when both cards have the same rank", () => {
    const playerCard = new Card("Q", "spades");
    const computerCard = new Card("Q", "hearts");

    const result = engine.decideWinner(playerCard, computerCard);

    expect(result).toBe("draw");
  });
});