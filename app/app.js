(function () {
	'use strict';

// Declare app level module which depends on views, and components
	angular.module('kingdom-death-ui', [
		'ngRoute',
		'kingdom-death-ui.login',
		'kingdom-death-ui.setup',
		'kingdom-death-ui.aiDeck',
		'kingdom-death-ui.tokenTracker',
		'core.monster',
		'core.card',
		'core.deck',
		'core.monsterCardLibrary',
		'core.aiDeckBuilder',
		'core.toggleTokenClass',
		'ui.router',
		'ui.bootstrap',
	]);

})();