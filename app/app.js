(function () {
	'use strict';
	String.prototype.capitalize = function() {
		return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
	};
	
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
		'core.deckRenderer',
		'core.cardDeck',
		'core.lightBox',
		'core.cardAreaRenderer',
		'core.gameCard',
		'core.cardReceptacle',
		'ui.router',
		'ui.bootstrap',
	]);

})();