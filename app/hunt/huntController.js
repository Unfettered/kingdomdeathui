(function () {
	'use strict';
	angular.module('kingdom-death-ui.hunt')
		.controller('huntController', huntControlller);

	huntControlller.$inject = ['monster', 'monsterDefinition', '$state'];

	function huntControlller(monster, monsterDefinition, $state) {
		if (monster.name == "") {
			$state.go('kingdom-death-ui.setup');
		} else {
			this.huntDeck = monsterDefinition.getHuntDeck(monster.name);
			this.huntSetup = monsterDefinition.getHuntSetup(monster.name, monster.level);
		}
	}
})();