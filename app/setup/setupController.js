(function () {
	'use strict';

	angular.module('kingdom-death-ui.setup')
		.controller('setupController', setupController);

	setupController.$inject = ['monster', 'aiDeckBuilder', 'hitLocationDeckBuilder', 'resourceDeckBuilder', 'monsterCardLibrary', 'monsterDefinition'];

	function setupController(monster, aiDeckBuilder, hitLocationDeckBuilder, resourceDeckBuilder, monsterCardLibrary, monsterDefinition) {
		var controller = this;
		controller.monster = monster;
		controller.monsterDefinition = monsterDefinition;
		controller.monsterCardLibrary = monsterCardLibrary;
		controller.monsterList = monsterDefinition.getMonsters();
		controller.levelList = [];

		controller.loadMonster = loadMonster;
		controller.getMonsterLevels = getMonsterLevels;

		function loadMonster(monsterName, monsterLevel) {
			monsterCardLibrary.resetLibrary();
			controller.monster.name = monsterName;
			controller.monster.level = monsterLevel;
			aiDeckBuilder.generateDeck(monster);
			hitLocationDeckBuilder.generateDeck(monster);
			resourceDeckBuilder.generateDeck(monster);
		}

		function getMonsterLevels(monsterLevel) {
			controller.levelList = monsterDefinition.getMonsterLevels(monsterLevel);
			debugger;
		}
	}
})();