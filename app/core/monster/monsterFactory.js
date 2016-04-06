(function () {
    'use strict';
    angular
        .module('core.monster')
        .factory('monster', monster);

    monster.$inject = ['card', 'deck'];

    function monster(card, deck) {
        return {
            name: '',
            level: '',
            accuracy: 0,
            damage: 0,
            evasion: 0,
            luck: 0,
            movement: 0,
            speed: 0,
            toughness: 0,
            hitLocationDeck: deck.get('HitLocation'),
            hitLocationDiscardDeck: deck.get('HitLocation'),
            persistentInjuryDeck: deck.get('HitLocation'),

            aiDeck: deck.get('AI'),
            aiDiscardDeck: deck.get('AI'),
            moodDeck: deck.get('AI'),

            resourceDeck: deck.get('Resource'),
            drawnResourceDeck: deck.get('Resource'),

            starterDeck: deck.get('AI'),
            woundDeck: deck.get('AI'),
            playAreaDeck: deck.get('All'),
            archiveDeck: deck.get('All'),
            getMonsterCardFrontPath: getMonsterCardFrontPath,
            getMonsterCardBackPath: getMonsterCardBackPath,
            reset: reset

        }

        function getMonsterCardFrontPath() {
            return '/images/Monsters/' + this.name + '/' + this.name + '.png';
        }

        function getMonsterCardBackPath() {
            return '/images/Monsters/' + this.name + '/' + this.name + ' Back.png';
        }

        function reset() {
            this.name = '';
            this.level = '';
            this.accuracy = 0;
            this.damage = 0;
            this.evasion = 0;
            this.luck = 0;
            this.movement = 0;
            this.speed = 0;
            this.toughness = 0;

            this.hitLocationDeck = deck.get('HitLocation');
            this.hitLocationDiscardDeck = deck.get('HitLocation');
            this.persistentInjuryDeck = deck.get('HitLocation');

            this.aiDeck = deck.get('AI');
            this.aiDiscardDeck = deck.get('AI');
            this.moodDeck = deck.get('AI');

            this.resourceDeck = deck.get('Resource');
            this.drawnResourceDeck = deck.get('Resource');

            this.starterDeck = deck.get('AI');
            this.woundDeck = deck.get('AI');
            this.playAreaDeck = deck.get('All');
            this.archiveDeck = deck.get('All');

        }
    }

})();