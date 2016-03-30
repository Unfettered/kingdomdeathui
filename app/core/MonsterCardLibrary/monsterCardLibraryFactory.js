(function () {
	'use strict';
	angular
		.module('core.monsterCardLibrary')
		.factory('monsterCardLibrary', monsterCardLibrary);

	monsterCardLibrary.$inject = ['card', 'deck'];

	function monsterCardLibrary(card, deck) {
		var factory = this;
		var cardService = card;
		var deckService = deck;
		factory.pullRandomCard = pullRandomCard;
		factory.pullSpecificCard = pullSpecificCard;
		factory.resetLibrary = resetLibrary;
		factory.buildLibrary = buildLibrary;
		function pullRandomCard(monsterName, type, aiLevel) {
			var cardPool;
			var drawnPool;
			if (type == 'AI') {
				cardPool = this.library[monsterName][type][aiLevel];
				drawnPool = this.library[monsterName].drawn[type][aiLevel];
			} else {
				cardPool = this.library[monsterName][type];
				drawnPool = this.library[monsterName].drawn[type];
			}
			var newCard = cardPool.pullRandomCard();
			drawnPool.push(newCard);
			return newCard;
		}

		function pullSpecificCard(monsterName, type, aiLevel, cardName) {
			var cardPool;
			var drawnPool;
			if (type == 'AI') {
				cardPool = this.library[monsterName][type][aiLevel];
				drawnPool = this.library[monsterName].drawn[type][aiLevel];
			} else {
				cardPool = this.library[monsterName][type];
				drawnPool = this.library[monsterName].drawn[type];
			}
			var newCard = cardPool.drawSpecificCard(cardName);
			drawnPool.push(newCard);

			return newCard;
		}

		function resetLibrary() {
			this.buildLibrary();
		}

		function buildLibrary() {
			debugger;
			for (var monsterName in this.libraryDefinition) {
				//ai Decks
				for (var aiLevel in this.libraryDefinition[monsterName]['AI']) {
					this.library[monsterName]['AI'][aiLevel] = deckService.get('AI');
					this.library[monsterName].drawn['AI'][aiLevel] = deckService.get('Drawn AI');

					for (var cardName in this.libraryDefinition[monsterName]['AI'][aiLevel]) {
						this.library[monsterName]['AI'][aiLevel].push( cardService.get(cardName, monsterName, 'AI', aiLevel) );
					}
				}

				//Hit Location Decks
				this.library[monsterName].drawn['HitLocation'] = deckService.get('Drawn HitLocation');
				this.library[monsterName]['HitLocation'] = deckService.get('HitLocation');
				for (var cardName in this.libraryDefinition[monsterName]['HitLocation']) {
					this.library[monsterName]['HitLocation'].push( cardService.get(cardName, monsterName, 'HitLocation') );
				}

				//Hunt Decks
				this.library[monsterName].drawn['Hunt'] = deckService.get('Drawn Hunt');
				this.library[monsterName]['Hunt'] = deckService.get('Hunt');
				for (var cardName in this.libraryDefinition[monsterName]['Hunt']) {
					this.library[monsterName]['Hunt'].push( cardService.get(cardName, monsterName, 'Hunt') );
				}

				//Resource Decks
				this.library[monsterName].drawn['Resource'] = deckService.get('Drawn Resource');
				this.library[monsterName]['Resource'] = deckService.get('Resource');
				for (var cardName in this.libraryDefinition[monsterName]['Resource']) {
					this.library[monsterName]['Resource'].push( cardService.get(cardName, monsterName, 'Resource') );
				}
			}

		}

		factory.library = {};
		factory.libraryDefinition = {
			'White Lion': {
				AI: {
					starter: [
						"Cunning",
						"Merciless",
					],
					basic: [
						"Bat Around",
						"Chomp",
						"Claw",
						"Claw",
						"Combo Claw",
						"Grasp",
						"Grasp",
						"Power Swat",
						"Revenge",
						"Size Up",
						"Size Up",
						"Vicious Claw",
					],
					advanced: [
						"Alert",
						"Blood Thirsty",
						"Bloody Claw",
						"Enraged",
						"Ground Fighting",
						"Lick Wounds",
						"Maul",
						"Smart Cat",
						"Terrifying Roar",
					],
					legendary: [
						"Golden Eyes",
						"Vanish",
					],
				},
				HitLocation: [
					"Beast’s Back",
					"Beast’s Brow",
					"Beast’s Chest",
					"Beast’s Ear",
					"Beast’s Elbow",
					"Beast’s Femur",
					"Beast’s Flank",
					"Beast’s Hand",
					"Beast’s Heel",
					"Beast’s Knee",
					"Beast’s Maw",
					"Beast’s Paw",
					"Beast’s Ribs",
					"Beast’s Scapular Deltoid",
					"Beast’s Tail",
					"Beast’s Temple",
					"Beast’s Tricep",
					"Clever Ploy",
					"Fleshy Gut",
					"Fuzzy Groin",
					"Glorious Mane",
					"Soft Belly",
					"Straining Neck",
				],
				Hunt: [
					"Aromatic Breeze",
					"Lion in Heat",
					"Lion’s Sculpture",
					"Marked Territory",
					"Prowling Lion",
					"Scratching Grounds",
					"Sea of Golden Grass",
					"White Lion Cub"
				],
				Resource: [
					"Curious Hand",
					"Eye of Cat",
					"Golden Whiskers",
					"Great Cat Bones",
					"Great Cat Bones",
					"Great Cat Bones",
					"Great Cat Bones",
					"Lion Claw",
					"Lion Claw",
					"Lion Claw",
					"Lion Tail",
					"Lion Testes",
					"Shimmering Mane",
					"Sinew",
					"Sinew",
					"White Fur",
					"White Fur",
					"White Fur",
					"White Fur",
				],
				drawn: {
					AI: {
						starter: [],
						basic: [],
						advanced: [],
						legendary: [],
					},
					HitLocation: [],
					Hunt: [],
					Resource: []
				}
			}
		}
		factory.buildLibrary();
		return factory;
	}

})();