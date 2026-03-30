const GameEngine = require("../../src/application/GameEngine");

describe("GameEngine", () => {
  test("starts a new game with a shuffled deck", () => {
    const engine = new GameEngine();
    engine.startNewGame();
    expect(engine.deck.size()).toBe(52);
  });
});