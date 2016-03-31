(function () {
	'use strict';
	angular
		.module('core.deck')
		.service('deck', deck);

	deck.$inject = ['card'];

	function deck(card) {
		this.get = function (type) {
			var newDeck = {
				cards: [],
				type: type,
				getDeckBackPath: getDeckBackPath,
				addCard: addCard,
				shuffle: shuffle,
				pullRandomCard: pullRandomCard,
				pullSpecificCard: pullSpecificCard,
				pullNextCard:pullNextCard,
				flush:flush,
				length:length

			}

			function addCard(card) {
				if(!card){
					return;
				}
				this.cards.unshift(card);
			}

			function shuffle() {

			}

			function getDeckBackPath() {
				if (this.cards.length > 0) {
					this.cards[0].getCardBackPath()
				}
				return null;
			}

			function pullNextCard() {
				if (this.cards.length < 1) {
					return null;
				}
				var card = this.cards.splice(0, 1)[0];
				return card;
			}

			function flush() {
				this.cards = [];
			}

			function length() {
				return this.cards.length;
			}

			function pullRandomCard() {
				var size = this.cards.length;
				var random = Math.floor(Math.random() * size);
				var card = this.cards.splice(random, 1)[0];
				return card;
			}

			function pullSpecificCard(cardName) {
				var card;
				for (var i = 0; i < this.cards.length; i++) {
					card = this.cards[i];
					if (card.name = cardName) {
						this.cards.splice(i);
					}
				}
				return card;
			}

			return newDeck;
		}
	}
})();