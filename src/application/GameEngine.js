const { Deck } = require("../domain/Deck");

/**
 * Core game coordinator responsible for managing the deck,
 * players, and turn flow.
 * This class acts as the central controller for the game.
 * It initializes and shuffles decks, tracks players, and
 * evaluates outcomes such as determining the winner of a round.
 * Game rules, scoring, and AI logic will be added here as the
 * project evolves.
 */
class GameEngine {
  constructor() {
    //Initialize a new deck of cards when the game engine is starts
    this.deck = new Deck();
    //Initialize an empty array to hold players
    // this can be used later to manage human vs AI players
    this.players = [];
  }

  /**
   * Starts a new game by creating and shuffling a fresh deck.
   * This resets the game state and prepares the engine for a new
   * round or session. 
   * Future enhancements will include dealing initial hands and initializing player state.
   */
  startNewGame() {
    //Create a new standard deck of 52 cards
    this.deck = new Deck();
    //Shuffle the deck to randomise the order of the cards
    this.deck.shuffle();
    // TODO: deal initial hands, set up state, etc.
  }

  /**
   * Determines the winner between a player's card and the computer's card.
   * Compares card ranks using a fixed rank order from lowest ("2")
   * to highest ("A"). Suits are not considered in the comparison.
   * Future versions may include suit-based tie-breaking or more complex rules.
   * @param {Card} playerCard - The card played by the player.
   * @param {Card} computerCard - The card played by the computer.
   * @returns {"player" | "computer" | "draw"} The outcome of the comparison.
   */

  decideWinner(playerCard, computerCard) {
    // Define the rank order for the card game, where the index represent the strength of the card
    // The order starts from "2" as the lowest and "A" as the highest rank
    const RANK_ORDER = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    // TODO: Define suit order if needed for tie-breaking in future versions
    //Get the rank order for the player's card
    const playerValue = RANK_ORDER.indexOf(playerCard.rank);
    //Get the rank order for the computer's card
    const computerValue = RANK_ORDER.indexOf(computerCard.rank);
    //Compare the rank order of the player's card and the computer's card to decide the winner
    if (playerValue > computerValue) return "player";
    if (computerValue > playerValue) return "computer";
    //If both cards have the same rank, return draw
    return "draw";
  }
}

module.exports = GameEngine;