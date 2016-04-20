(function () {
	'use strict';
	angular.module('kingdom-death-ui.hunt')
		.controller('huntController', huntControlller);

	huntControlller.$inject = ['monster','$state'];

	function huntControlller(monster, $state) {
		if (monster.name == "") {
			$state.go('kingdom-death-ui.setup');
		}
	}
})();