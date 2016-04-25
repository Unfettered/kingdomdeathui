(function () {
    'use strict';

    angular.module('kingdom-death-ui.reset')
        .controller('resetController', resetController);

    resetController.$inject = ['monster', 'monsterCardLibrary', '$state'];

    function resetController(monster, monsterCardLibrary, $state) {
        monsterCardLibrary.resetLibrary();
        monster.reset();
        $state.go('kingdom-death-ui.setup');
    }
})();