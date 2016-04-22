(function () {
	'use strict';
	angular
		.module('core.huntDeckBuilder')
		.service('huntDeckBuilder', huntDeckBuilder);

	huntDeckBuilder.$inject = ['monsterCardLibrary', 'monsterDefinition', 'card'];

	function huntDeckBuilder(monsterCardLibrary, monsterDefinition, card) {
		var cardService = card;
		this.monsterDeckDefinitionRepository = monsterDefinition;
		this.monsterCardLibrary = monsterCardLibrary;
		this.generateDeck = generateDeck;
		function generateDeck(monster) {
			var huntSetup = monsterDefinition.getHuntSetup(monster.name, monster.level);
			if (huntSetup) {
				var huntDeck = monsterDefinition.getHuntDeck(monster.name);
				huntDeck.shuffle();

				for (var index = 0; index < huntSetup.length; index++) {
					if (huntSetup[index] == 'Monster Hunt Event') {
						monster.huntDeck.cards.push(huntDeck.pullNextCard());
					} else if (huntSetup[index] == 'Overwhelming Darkness') {
						//monster.overwhelmingDarkness = index;
					} else if (huntSetup[index] == 'Monster Start') {
						monster.huntDeck.cards.push(cardService.get('Random Event', 'Basic', 'Hunt'));
						monster.huntStart = index;
					} else {
						monster.huntDeck.cards.push(cardService.get('Random Event', 'Basic', 'Hunt'));
					}
				}
			}
		}
	}

})();