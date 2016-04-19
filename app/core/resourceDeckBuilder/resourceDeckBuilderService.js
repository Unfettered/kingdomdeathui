(function () {
	'use strict';
	angular
		.module('core.resourceDeckBuilder')
		.service('resourceDeckBuilder', resourceDeckBuilder);

	resourceDeckBuilder.$inject = ['monsterCardLibrary', 'monsterDefinition'];

	function resourceDeckBuilder(monsterCardLibrary, monsterDefinition) {
		this.monsterDeckDefinitionRepository = monsterDefinition;
		this.monsterCardLibrary = monsterCardLibrary;
		this.generateDeck = generateDeck;
		function generateDeck(monster) {
			var deckDefinition = this.monsterDeckDefinitionRepository.getMonsterResourceDeckDefinition(monster.name);
			monster.resourceDeck.flush();
			for (var cardIndex in deckDefinition.cards) {
				var card = deckDefinition.cards[cardIndex];
				monster.resourceDeck.addCard(card);
			}
			monster.resourceDeck.shuffle();
		}
	}

})();