(function () {
	'use strict';
	angular
		.module('core.gameCard')
		.directive('gameCard', gameCard);
	gameCard.$inject = ['monster', '$compile'];

	function gameCard(monster, $compile) {
		var directiveDefinitionObject = {
			restrict: 'C',
			scope: '=',

			link: function (scope, element, attrs) {
				var deckName = attrs.deckName;
				var deck = scope.view.monster[deckName];
				var deckIndex = attrs.deckIndex;

				element.bind('dragstart', dragCardFromDeck);
				element.bind('dragend', dropCardFromDeck);

				function dragCardFromDeck(event) {
					this.scope = scope;
					this.deckName = deckName;
					this.monster = monster;
					monster.activeCard = monster[deckName].pullCardByIndex(deckIndex);
				}

				function dropCardFromDeck(event) {
					this.scope = scope;
					this.deckName = deckName;
					this.monster = monster;

					debugger;

					//no target aquired
					if (!$('.highlighted-area').length && this.monster.activeCard) {
						scope.$apply(function(){
							monster[deckName].addCard(monster.activeCard);
							monster.activeCard = null;
						});

					}
				}

			}
		};

		return directiveDefinitionObject;
	}
})();