(function () {
	'use strict';
	angular
		.module('core.aiDeckBuilder')
		.service('aiDeckBuilder', aiDeckBuilder);

	aiDeckBuilder.$inject = ['monsterCardLibrary', 'monsterDefinition'];

	function aiDeckBuilder(monsterCardLibrary, monsterDefinition) {
		this.monsterDeckDefinitionRepository = monsterDefinition;
		this.monsterCardLibrary = monsterCardLibrary;
		this.generateDeck = generateDeck;
		function generateDeck(monster) {
			var deckDefinition = this.monsterDeckDefinitionRepository.getMonsterAiDeckDefinition(monster.name, monster.level);

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
			for (var cardIndex in deckDefinition.starter) {
				card = deckDefinition.starter[cardIndex];
				monster.starterDeck.addCard(card);
			}
		}
	}

})();