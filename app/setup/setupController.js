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

        controller.monsterLevel = monster.level;
        controller.monsterName = monster.name;
        if (monster.name) {
            controller.levelList = monsterDefinition.getMonsterLevels(monster.name);
        }

        controller.loadMonster = loadMonster;
        controller.getMonsterLevels = getMonsterLevels;

        function loadMonster() {
            monsterCardLibrary.resetLibrary();
            monster.reset();
            controller.monster.name = controller.monsterName;
            controller.monster.level = controller.monsterLevel;

            aiDeckBuilder.generateDeck(monster);
            hitLocationDeckBuilder.generateDeck(monster);
            resourceDeckBuilder.generateDeck(monster);
        }

        function getMonsterLevels() {
            controller.monsterLevel = "";
            controller.levelList = monsterDefinition.getMonsterLevels(controller.monsterName);
        }
    }
})();