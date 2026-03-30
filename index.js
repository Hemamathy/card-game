const { Card } = require("./src/domain/Card");
const { Deck } = require("./src/domain/Deck");
const GameEngine = require("./src/application/GameEngine");

/**
 * Entry point for the card‑game domain and application layer.
 * This module re‑exports the core building blocks of the system:
 * - Card: represents an individual playing card
 * - Deck: manages a collection of cards and shuffling/drawing logic
 * - GameEngine: coordinates gameplay, deck state, and winner evaluation
 * External consumers can import these classes directly from this
 * module without needing to know the internal folder structure.
 */
module.exports = {
  Card,
  Deck,
  GameEngine,
};