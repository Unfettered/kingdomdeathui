(function () {
	'use strict';
	angular
		.module('core.monster')
		.factory('monster', monster);

	monster.$inject = ['card','deck'];

	function monster(card,deck) {
		return {
			name: '',
			level: '',
			accuracy: 0,
			damage: 0,
			evasion: 0,
			luck: 0,
			movement: 0,
			speed: 0,
			toughness:0,
			hitLocationDeck: deck.get('HitLocation'),
			hitLocationDiscardDeck: deck.get('HitLocation'),
			aiDeck: deck.get('AI'),
			aiDiscardDeck: deck.get('AI'),
			resourceDeck: deck.get('Resource'),
			woundDeck:deck.get('AI'),
			starterDeck:deck.get('AI')
		}

	}

})();