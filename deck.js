//deck.js

var Deck = function() {
	console.log("Creating a new deck");

    this.numCards = 52;

	this.drawCard = function() {
		this.numCards--;
		console.log("A card has been draw.  Cards left: " + this.numCards);
	}

}

module.exports = Deck;