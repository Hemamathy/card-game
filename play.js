// Use the public API from index.js
const { GameEngine } = require("./index");

// Create a new game engine
const game = new GameEngine();

// Start a new game (creates + shuffles deck)
game.startNewGame();

// Draw cards
const playerCard = game.deck.draw();
const computerCard = game.deck.draw();

// Display cards
console.log("=== High Card Game ===");
console.log(`You drew:      ${playerCard.toString()}`);
console.log(`Computer drew: ${computerCard.toString()}`);

// Decide winner using GameEngine logic
const winner = game.decideWinner(playerCard, computerCard);

// Display result
console.log(`\nWinner: ${winner.toUpperCase()}`);