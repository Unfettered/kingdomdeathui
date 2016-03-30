(function () {
	'use strict';
	angular
		.module('core.aiDeckBuilder')
		.service('aiDeckBuilder', aiDeckBuilder);

	aiDeckBuilder.$inject = ['card, monster, monsterCardLibrary'];

	function aiDeckBuilder(card, monster, monsterCardLibrary) {
		this.cardService = new card();
		this.monsterDeckDefinitionRepository = {
			'White Lion': {
				'Prologue': {
					starter: [],
					required: [
						this.cardService.get('Claw', 'White Lion', 'AI', 'basic'),
						this.cardService.get('Chomp', 'White Lion', 'AI', 'basic'),
						this.cardService.get('Size Up', 'White Lion', 'AI', 'basic'),
						this.cardService.get('Power Swat', 'White Lion', 'AI', 'basic'),
						this.cardService.get('Grasp', 'White Lion', 'AI', 'basic'),
						this.cardService.get('Maul', 'White Lion', 'AI', 'advanced'),
						this.cardService.get('Terrifying Roar', 'White Lion', 'AI', 'advanced'),
						this.cardService.get('Enraged', 'White Lion', 'AI', 'advanced')
					],
					basic: 0,
					advanced: 0,
					legendary: 0
				},
				'Level 1': {
					starter: [],
					required: [],
					basic: 7,
					advanced: 3,
					legendary: 0
				},
				'Level 2': {
					starter: [
						this.cardService.get('Cunning', 'White Lion', 'AI', 'starter'),
					],
					required: [],
					basic: 10,
					advanced: 5,
					legendary: 0
				},
				'Level 3': {
					starter: [
						this.cardService.get('Cunning', 'White Lion', 'AI', 'starter'),
						this.cardService.get('Merciless', 'White Lion', 'AI', 'starter')
					],
					required: [],
					basic: 10,
					advanced: 9,
					legendary: 2
				}
			}
		}
		this.monsterCardLibrary = new monsterCardLibrary();
		this.generateDeck = generateDeck;
		function generateDeck(monster) {
			var deckDefinition = this.monsterDeckDefinitionRepository[monster.name][monster.level];
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
			return {
				deck:deck,
				starter:starterDeck
			}
		}
	}

})();