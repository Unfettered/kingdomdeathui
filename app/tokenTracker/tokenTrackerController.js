(function () {
	'use strict';

	angular.module('kingdom-death-ui.tokenTracker')
		.controller('tokenTrackerController', tokenTrackerController);

	tokenTrackerController.$inject = ['monster'];

	function tokenTrackerController(monster) {
		var controller = this;
		controller.attributes = ['accuracy', 'damage', 'evasion', 'luck', 'movement', 'speed'];
		controller.monster = monster;

		controller.increment = function (attribute, value) {
			monster[attribute] += value;
		}
	}
})();