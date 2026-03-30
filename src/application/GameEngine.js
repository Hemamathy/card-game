const { Deck } = require("../domain");

/**
 * Coordinates deck, players, and turns.
 * Game rules and AI will plug in here later.
 */
class GameEngine {
  constructor() {
    this.deck = new Deck();
    this.players = []; // later: human vs AI
  }

  startNewGame() {
    this.deck = new Deck();
    this.deck.shuffle();
    // TODO: deal initial hands, set up state, etc.
  }
}

module.exports = GameEngine;