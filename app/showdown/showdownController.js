(function () {
	'use strict';

	angular.module('kingdom-death-ui.showdown')
		.controller('showdownController', showdownController);

	showdownController.$inject = ['monster', 'aiDeckBuilder', 'hitLocationDeckBuilder', 'resourceDeckBuilder'];

	function showdownController(monster, aiDeckBuilder, hitLocationDeckBuilder, resourceDeckBuilder) {
		var controller = this;
		controller.monster = monster;
		if (false && !controller.monster.name) {
			controller.monster.name = "White Lion";
			controller.monster.level = "Level 3";
			aiDeckBuilder.generateDeck(monster);
			hitLocationDeckBuilder.generateDeck(monster);
			resourceDeckBuilder.generateDeck(monster);
		}
		controller.attributes = ['accuracy', 'damage', 'evasion', 'luck', 'movement', 'speed', 'toughness'];

		controller.increment = function (attribute, value) {
			monster[attribute] += value;
		}
	}
})();