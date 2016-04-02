(function () {
	'use strict';
	angular
		.module('core.hitLocationDeckBuilder')
		.service('hitLocationDeckBuilder', hitLocationDeckBuilder);

	hitLocationDeckBuilder.$inject = ['monsterCardLibrary', 'monsterDefinition'];

	function hitLocationDeckBuilder(monsterCardLibrary, monsterDefinition) {
		this.monsterDeckDefinitionRepository = monsterDefinition;
		this.monsterCardLibrary = monsterCardLibrary;
		this.generateDeck = generateDeck;
		function generateDeck(monster) {
			var deckDefinition = this.monsterDeckDefinitionRepository.getMonsterHitLocationDeckDefinition(monster.name, monster.level);

			monster.hitLocationDeck.flush();

			for (var cardIndex in deckDefinition) {
				var card = deckDefinition[cardIndex];
				monster.hitLocationDeck.addCard(card);
			}

		}
	}

})();