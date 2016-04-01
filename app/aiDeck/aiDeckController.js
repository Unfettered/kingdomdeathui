(function () {
	'use strict';

	angular.module('kingdom-death-ui.aiDeck')
		.controller('aiDeckController', aiDeckController);

	aiDeckController.$inject = ['monster','aiDeckBuilder'];

	function aiDeckController(monster, aiDeckBuilder) {
		var controller = this;
		controller.monster = monster;
		controller.monster.name = "White Lion";
		controller.monster.level = "Level 3";
		aiDeckBuilder.generateDeck(monster);
	}
})();