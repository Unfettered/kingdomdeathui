(function () {
    'use strict';

    angular.module('kingdom-death-ui.setup')
        .controller('setupController', setupController);

    setupController.$inject = ['monster', 'aiDeckBuilder', 'hitLocationDeckBuilder', 'resourceDeckBuilder', 'monsterCardLibrary', 'monsterDefinition', 'huntDeckBuilder'];

    function setupController(monster, aiDeckBuilder, hitLocationDeckBuilder, resourceDeckBuilder, monsterCardLibrary, monsterDefinition, huntDeckBuilder) {
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
            huntDeckBuilder.generateDeck(monster);


            var stats = monsterDefinition.getMonsterAttributeDefinition(controller.monsterName, controller.monsterLevel);

            for (var statName in stats) {
                monster[statName] =  stats[statName];
            }
            monster.life = monsterDefinition.getMonsterLife(controller.monsterName, controller.monsterLevel);
        }

        function getMonsterLevels() {
            controller.monsterLevel = "";
            controller.levelList = monsterDefinition.getMonsterLevels(controller.monsterName);
        }
    }
})();