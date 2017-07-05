// game.js

var Deck = require('./deck.js');

var Game = function() {
	console.log("Creating a new game");
	var d = new Deck();

	this.startGame = function() {
		console.log("The game is starting");
		d.drawCard();
		d.drawCard();
	}
	this.endGame = function() {
		console.log("The game is ending.  Ben won.  Mike lost.");
	}
}

module.exports = Game;

