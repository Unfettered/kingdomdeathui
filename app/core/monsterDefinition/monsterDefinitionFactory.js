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
					huntSetup:null,
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
					huntSetup:[
						'P',
						'S',
						'S',
						'B',
						'M',
						'B',
						'O',
						'B',
						'S',
						'S',
						'B',
						'B',
						'B'
					],
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
					huntSetup:[
						'P',
						'S',
						'S',
						'B',
						'B',
						'B',
						'O',
						'M',
						'S',
						'S',
						'B',
						'B',
						'B'
					],
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
					huntSetup:[
						'P',
						'S',
						'S',
						'B',
						'B',
						'B',
						'O',
						'B',
						'S',
						'S',
						'B',
						'B',
						'M'
					],
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
		factory.getMonsters = getMonsters;
		factory.getMonsterLevels = getMonsterLevels;
		factory.getMonsterAiDeckDefinition = getMonsterAiDeckDefinition;
		function getDefinition(monsterName, level){
			return this.definitions[monsterName][level];
		}

		function getMonsters(){
			var list = [];
			for (var monsterName in this.definitions) {
				list.push(monsterName);
			}
			return list;
		}

		function getMonsterLevels(monsterName){
			var list = [];
			for (var aiLevel in this.definitions[monsterName]) {
				list.push(aiLevel);
			}
			return list;
		}

		function getMonsterAiDeckDefinition(monsterName, aiLevel){
			return this.definitions[monsterName][aiLevel].aiDecks;
		}
		return factory;
	}

})();