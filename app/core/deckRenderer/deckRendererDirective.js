(function () {
	'use strict';
	angular
		.module('core.deckRenderer')
		.directive('deckRenderer', deckRenderer);

	deckRenderer.$inject = ['monster', '$compile'];

	function deckRenderer( monster, $compile ) {
		var directiveDefinitionObject = {
			restrict: 'C',
			scope: '=',
			link: function ($scope, $element, $attrs) {
				var deckName = $attrs.deckName;
				var cardFacing = $attrs.cardFacing;
				var defaultValue = $attrs.defaultValue;


				$scope.$watchGroup(
					['view.monster.' + deckName + '.length()', 'view.monster.' + deckName + '.cards[0].uuid' ],
					renderDeck
				);

				function renderDeck() {
					var deck  = $scope.view.monster[deckName];
					if(deck.length()<1){
						angular.element($element.find('div')[1]).html(defaultValue);
						return;
					}
					angular.element($element.find('div')[1]).html('');
					var imagePath = '';
					if (cardFacing == 'front') {
						imagePath  = deck.cards[0].getCardFrontPath();
					} else {
						imagePath  = deck.cards[0].getCardBackPath();
					}
					var cardHtml = '<img src="'+imagePath+'" >'
						+ '<span class="ui-icon-refresh shuffler" deck-name="'+deckName+'"></span>';
					var newCard = $compile( cardHtml )( $scope );
					angular.element($element.find('div')[1]).append(newCard);
				}
			}
		};
		return directiveDefinitionObject;
	}
})();