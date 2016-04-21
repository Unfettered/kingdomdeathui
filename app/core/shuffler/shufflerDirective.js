(function () {
	'use strict';
	angular
		.module('core.shuffler')
		.directive('shuffler', shuffler);
	shuffler.$inject = ['monster', '$compile'];

	function shuffler(monster, $compile) {
		var directiveDefinitionObject = {
			restrict: 'C',
			scope: '=',

			link: function (scope, element, attrs) {
				var deckName = attrs.deckName;
				var deck = scope.view.monster[deckName];

				element.bind('click', shuffle);

				function shuffle(event) {
					event.preventDefault();
					event.stopPropagation();
					this.scope = scope;
					this.deck = deck;
					scope.$apply(function(){
						deck.shuffle();
					});
				}

			}
		};

		return directiveDefinitionObject;
	}
})();