(function () {
	'use strict';
	angular
		.module('core.monster')
		.factory('monster', monster);

	monster.$inject = [];

	function monster() {
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
			pullAI: pullAI
		}
		function pullAI(){

		}
	}

})();