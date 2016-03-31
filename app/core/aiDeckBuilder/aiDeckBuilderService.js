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

			monster.aiDeck.flush();
			monster.starterDeck.flush();

			for (var card in deckDefinition.required) {
				monster.aiDeck.addCard(monsterCardLibrary.pullSpecificCard(card.monster, 'AI', card.aiLevel, card.name));
			}
			for (var i = 0; i < deckDefinition.basic; i++) {
				monster.aiDeck.addCard(monsterCardLibrary.pullRandomCard(monster.name, 'AI', 'basic'));
			}
			for (var i = 0; i < deckDefinition.advanced; i++) {
				monster.aiDeck.addCard(monsterCardLibrary.pullRandomCard(monster.name, 'AI', 'advanced'));
			}
			for (var i = 0; i < deckDefinition.legendary; i++) {
				monster.aiDeck.addCard(monsterCardLibrary.pullRandomCard(monster.name, 'AI', 'legendary'));
			}
			for (var card in deckDefinition.starter) {
				monster.starterDeck.addCard(monsterCardLibrary.pullSpecificCard(card.monster, 'AI', 'starter', card.name));
			}
		}
	}

})();