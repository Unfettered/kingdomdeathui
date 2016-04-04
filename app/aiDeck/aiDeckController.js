(function () {
	'use strict';

	angular.module('kingdom-death-ui.aiDeck')
		.controller('aiDeckController', aiDeckController);

	aiDeckController.$inject = ['monster','aiDeckBuilder', 'hitLocationDeckBuilder', 'resourceDeckBuilder'];

	function aiDeckController(monster, aiDeckBuilder, hitLocationDeckBuilder, resourceDeckBuilder) {
		var controller = this;
		controller.monster = monster;
		controller.monster.name = "White Lion";
		controller.monster.level = "Level 3";
		aiDeckBuilder.generateDeck(monster);
		hitLocationDeckBuilder.generateDeck(monster);
		resourceDeckBuilder.generateDeck(monster);
	}
})();