(function () {
	'use strict';

	angular.module('kingdom-death-ui.aiDeck')
		.controller('aiDeckController', aiDeckController);

	aiDeckController.$inject = ['monster'];

	function aiDeckController(monster) {
		var controller = this;
		controller.monster = monster;
		controller.monster.name = "White Lion";
		controller.monster.level = "Level 1";
	}
})();