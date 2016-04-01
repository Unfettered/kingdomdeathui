(function () {
	'use strict';
	angular
		.module('core.cardAreaRenderer')
		.directive('cardAreaRenderer', cardAreaRenderer);


	function cardAreaRenderer($compile) {
		var directiveDefinitionObject = {
			restrict: 'C',
			scope: '=',
			link: function (scope, element, attrs) {
				var deckName = attrs.deckName;
				var cardFacing = attrs.cardFacing;
				var defaultValue = attrs.defaultValue;
				scope.$watch('view.monster.' + deckName + '.length()', function () {
					var deck = scope.view.monster[deckName];

					if (deck.length() < 1) {
						angular.element(element.find('div')[1]).html(defaultValue);
						return;
					}
					angular.element(element.find('div')[1]).html('');
					for (var cardInterator in deck.cards) {
						var card = deck.cards[cardInterator];
						var imagePath = '';
						if (cardFacing == 'front') {
							imagePath = card.getCardFrontPath();
						} else {
							imagePath = card.getCardBackPath();
						}
						var cardHtml = '<img deck-index="' + cardInterator + '" src="' + imagePath + '" class="light-box game-card" deck-name="'+deckName+'">';
						var newCard = $compile(cardHtml)(scope);
						angular.element(element.find('div')[1]).append(newCard);
					}
				});
			}
		};
		return directiveDefinitionObject;
	}
})();