(function () {
	'use strict';
	angular
		.module('core.monster')
		.factory('monster', monster);

	monster.$inject = ['card'];

	function monster(card) {
		return {
			name: '',
			level: '',
			accuracy: -1,
			damage: 0,
			evasion: 0,
			luck: 0,
			movement: 0,
			speed: 0,
			hitLocationDeck: {},
			aiDeck: {},
			resourceDeck: {},
			woundDeck:{},
			starterDeck:{},
			pullCard: pullCard
		}
		function pullCard(deckType){

		}
	}

})();