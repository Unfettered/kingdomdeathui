(function () {
	'use strict';
	angular
		.module('core.monsterDefinition')
		.factory('monsterDefinition', monsterDefinition);

	monsterDefinition.$inject = ['card'];

	function monsterDefinition(card) {
		var factory = this;
		this.cardService = card;
		this.definitions = {
			'White Lion': {
				'Prologue': {
					attributes: {
						accuracy: 0,
						damage: 0,
						evasion: 0,
						luck: 0,
						movement: 0,
						speed: 0,
						toughness:0,
					},
					aiDecks: {
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
					}
				},
				'Level 1': {
					attributes: {
						accuracy: 0,
						damage: 0,
						evasion: 0,
						luck: 0,
						movement: 0,
						speed: 0,
						Toughness:0,
					},
					aiDecks: {
						starter: [],
						required: [],
						basic: 7,
						advanced: 3,
						legendary: 0
					}
				},
				'Level 2': {
					attributes: {
						accuracy: 0,
						damage: 0,
						evasion: 0,
						luck: 0,
						movement: 0,
						speed: 0,
						Toughness:0,
					},
					aiDecks: {
						starter: [
							this.cardService.get('Cunning', 'White Lion', 'AI', 'starter'),
						],
						required: [],
						basic: 10,
						advanced: 5,
						legendary: 0
					}
				},
				'Level 3': {
					attributes: {
						accuracy: 2,
						damage: 0,
						evasion: 0,
						luck: 1,
						movement: 0,
						speed: 0,
						Toughness:0,
					},
					aiDecks: {
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
		}

		factory.getDefinition = getDefinition;
		function getDefinition(monsterName, level){
			return this.definitions[monsterName][level];
		}

		return factory;
	}

})();