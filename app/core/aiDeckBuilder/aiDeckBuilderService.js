(function () {
	'use strict';
	angular
		.module('core.aiDeckBuilder')
		.service('aiDeckBuilder', aiDeckBuilder);

	aiDeckBuilder.$inject = ['card', 'monster', 'monsterCardLibrary', 'monsterDefinition', 'deck'];

	function aiDeckBuilder(card, monster, monsterCardLibrary, monsterDefinition, deck) {
		this.cardService = card;
		this.monsterDeckDefinitionRepository = monsterDefinition;
		this.monsterCardLibrary = monsterCardLibrary;
		this.generateDeck = generateDeck;
		function generateDeck(monster) {
			var monsterDefinition = this.monsterDeckDefinitionRepository.getDefinition(monster.name,monster.level);
			var deckDefinition = monsterDefinition.aiDecks;
			var deck = [];
			var starterDeck = [];
			for (var card in deckDefinition.required) {
				deck.push(monsterCardLibrary.pullSpecificCard(card.monster, 'AI', card.aiLevel, card.name));
			}
			for (var i = 0; i < deckDefinition.basic; i++) {
				deck.push(monsterCardLibrary.pullRandomCard(monster.name, 'AI', 'basic'));
			}
			for (var i = 0; i < deckDefinition.advanced; i++) {
				deck.push(monsterCardLibrary.pullRandomCard(monster.name, 'AI', 'advanced'));
			}
			for (var i = 0; i < deckDefinition.legendary; i++) {
				deck.push(monsterCardLibrary.pullRandomCard(monster.name, 'AI', 'legendary'));
			}
			for (var card in deckDefinition.starter) {
				starterDeck.push(monsterCardLibrary.pullSpecificCard(card.monster, 'AI', 'starter', card.name));
			}
			monster.aiDeck = deck;
			monster.starterDeck = starterDeck;
		}
	}

})();