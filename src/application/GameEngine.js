const { Deck } = require("../domain/Deck");

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

  decideWinner(playerCard, computerCard) {
  const RANK_ORDER = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];

  const playerValue = RANK_ORDER.indexOf(playerCard.rank);
  const computerValue = RANK_ORDER.indexOf(computerCard.rank);

  if (playerValue > computerValue) return "player";
  if (computerValue > playerValue) return "computer";
  return "draw";
}

}

module.exports = GameEngine;