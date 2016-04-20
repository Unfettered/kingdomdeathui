(function () {
	'use strict';

	angular.module('kingdom-death-ui.showdown')
		.controller('showdownController', showdownController);

	showdownController.$inject = ['monster', 'aiDeckBuilder', 'hitLocationDeckBuilder', 'resourceDeckBuilder', '$state'];

	function showdownController(monster, aiDeckBuilder, hitLocationDeckBuilder, resourceDeckBuilder, $state) {
		if (monster.name == "") {
			$state.go('kingdom-death-ui.setup');
		}
		var controller = this;
		controller.monster = monster;
		controller.attributes = ['accuracy', 'damage', 'evasion', 'luck', 'movement', 'speed', 'toughness'];

		controller.increment = function (attribute, value) {
			if (attribute == 'life' && monster.life ===0 && value < 0) {
				return;
			}
			monster[attribute] += value;
		}
	}
})();