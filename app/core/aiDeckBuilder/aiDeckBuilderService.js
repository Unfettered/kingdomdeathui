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

			for (var cardIndex in deckDefinition.required) {
				var card = deckDefinition.required[cardIndex];
				monster.aiDeck.addCard(card);
			}
			for (var cardIndex in deckDefinition.starter) {
				card = deckDefinition.starter[cardIndex];
				if (card.aiLevel != 'starter') {
					card = monsterCardLibrary.pullSpecificCard(card.monster, card.type, card.aiLevel.toLowerCase(), card.name);
				}
				monster.starterDeck.addCard(card);
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
			monster.aiDeck.shuffle();
		}
	}

})();