(function () {
	'use strict';
	angular.module('kingdom-death-ui.hunt')
		.controller('huntController', huntControlller);

	huntControlller.$inject = ['monster', 'monsterDefinition', 'card', '$state'];

	function huntControlller(monster, monsterDefinition, card, $state) {
		var cardService = card;
		this.monster = monster;
		if (monster.name == "") {
			$state.go('kingdom-death-ui.setup');
		} else {
			
		}
	}
})();