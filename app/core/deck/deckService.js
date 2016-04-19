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
				length:length,
				pullCardByIndex:pullCardByIndex
			}

			function addCard(card) {
				if(!card){
					return;
				}
				this.cards.unshift(card);
			}

			function shuffle() {
				var currentIndex = this.cards.length, temporaryValue, randomIndex;
				// While there remain elements to shuffle...
				while (0 !== currentIndex) {

					// Pick a remaining element...
					randomIndex = Math.floor(Math.random() * currentIndex);
					currentIndex -= 1;

					// And swap it with the current element.
					temporaryValue = this.cards[currentIndex];
					this.cards[currentIndex] = this.cards[randomIndex];
					this.cards[randomIndex] = temporaryValue;
				}
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

			function pullCardByIndex(index){
				if (!this.cards[index]) {
					return null;
				}
				var card = this.cards.splice(index, 1)[0];
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
					if (card.name == cardName) {
						this.cards.splice(i,1);
						return card;
					}
				}
			}

			return newDeck;
		}
	}
})();