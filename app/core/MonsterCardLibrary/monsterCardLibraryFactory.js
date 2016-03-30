(function () {
	'use strict';
	angular
		.module('core.monsterCardLibrary')
		.factory('monsterCardLibrary', monsterCardLibrary);

	monsterCardLibrary.$inject = ['card'];

	function monsterCardLibrary(card) {
		var factory = this;
		var cardService = new card();
		factory.pullRandomCard = pullRandomCard;
		factory.pullSpecificCard = pullSpecificCard;
		factory.resetLibrary = resetLibrary;
		function pullRandomCard(monsterName, type, aiLevel) {
			var cardPool;
			var drawnPool;
			if(type=='AI'){
				cardPool = this.library[monsterName][type][aiLevel];
				drawnPool = this.library[monsterName].draw,[type][aiLevel];
			}
			var size = cardPool.length;
			var random = Math.floor(Math.random() * size);
			var name = cardPool.splice(random, 1);
			drawnPool.push(name);
			var newCard = cardService.get(name, monsterName, type, aiLevel);
			return newCard;
		}

		function pullSpecificCard(monsterName, type, aiLevel, cardName) {
			var cardPool;
			var drawnPool;
			if(type=='AI'){
				cardPool = this.library[monsterName][type][aiLevel];
				drawnPool = this.library[monsterName].drawn,[type][aiLevel];
			}else{
				cardPool = this.library[monsterName][type];
				drawnPool = this.library[monsterName].drawn,[type];
			}
			var index = cardPool.indexOf(cardName);
			var name = cardPool.splice(index, 1);
			drawnPool.push(name);
			var newCard = cardService.get(name, monsterName, type, aiLevel);
			return newCard;
		}

		function resetLibrary(){
			this.library = {};
			angular.copy(this.libraryClean, this.library);
		}

		factory.library = {
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
				HitLocation:[
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
				Hunt:[
					"Aromatic Breeze",
					"Lion in Heat",
					"Lion’s Sculpture",
					"Marked Territory",
					"Prowling Lion",
					"Scratching Grounds",
					"Sea of Golden Grass",
					"White Lion Cub"
				],
				Resource:[
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
					HitLocation:[],
					Hunt:[],
					Resource:[]
				}
			}
		}
		factory.libraryClean = {}
		angular.copy(factory.library, factory.libraryClean);
		return factory;
	}

})();