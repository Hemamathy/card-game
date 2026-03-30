
# Card Game Engine (TDD + Clean Architecture)
A lightweight, extensible card‑game engine built using Node.js, ES6+, and Test‑Driven Development (TDD). This project provides the foundational building blocks for any card‑based game — including Cards, Decks, Shuffling, and a Game Engine scaffold.
The goal is to create a clean, testable, UI‑agnostic core that can later support:
- Human vs AI gameplay
- Multiple card game rules (Blackjack, Poker, War, etc.)
- CLI, Web, or Mobile interfaces

# Features
## Card
Represents a playing card with rank and suit, including Unicode suit symbols.
## Deck
A full 52‑card deck with:
- Standard initialization
- Fisher–Yates shuffle
- Draw and size operations
## GameEngine
A coordinator for:
- Deck lifecycle
- Players (future)
- Game rules (future)
- AI logic (future)
# Public API Entry Point
index.js exposes:
const { Card, Deck , GameEngine } = require("./index");

This keeps imports clean and hides internal folder structure.

📦 Installation
git clone (https://github.com/Hemamathy/card-game)
cd card-game
npm install

# Running the Example Game
A simple CLI demo is included:
node index.js

You’ll see:
- Your card
- The computer’s card
- The winner
This is intentionally minimal — the engine is designed to grow.

# Running Tests
The project is built using TDD with Jest.
Run all tests:
npm test


## Run in watch mode:
npm run test:watch

# Project Structure
src/
  domain/
    Card.js
    Deck.js
  application/
    GameEngine.js
index.js
play.js
tests/
  domain/
    Card.test.js
    Deck.js
  application/
    GameEngine.js

# Why this structure?
This follows Clean Architecture principles:
- Domain → pure business logic
- Application → orchestration (game flow, rules, AI)
- Infrastructure → randomness, IO (future)
- Index → public API surface
This keeps the engine flexible and UI‑agnostic.

# Usage Examples
Create a card
const { Card } = require("./index");

const card = new Card("A", "spades");
console.log(card.toString()); // A♠


Create and shuffle a deck
const { Deck } = require("./index");

const deck = new Deck();
deck.shuffle();

console.log(deck.size()); // 52
console.log(deck.draw().toString());

# Start a new game
const GameEngine = require("./src/application/GameEngine");

const game = new GameEngine();
game.startNewGame();

# Roadmap
- Add Player model
- Add AI opponent
- Add game rules (choose a game)
- Add scoring system
- Add CLI UI
- Add Web UI
- Add multiplayer support

# Tools Used
- Node.js
- Jest (unit testing)
- ES6+ JavaScript
- Git (version control)
- ESLint – code linting to maintain consistent style and catch errors early`

