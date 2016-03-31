(function () {
	'use strict';
	angular
		.module('core.cardDeck')
		.directive('cardDeck', cardDeck);

	function cardDeck($compile) {
		var directiveDefinitionObject = {
			restrict: 'C',
			scope: '=',

			link: function (scope, element, attrs) {
				var deckName = attrs.deckName;
				var deck = scope.view.monster[deckName];

				scope.$watch('view.monster.' + deckName + '.length()', function () {
					$('#' + deckName + 'Modal').remove();

					var cardsHtml = '';

					for (var cardInterator in deck.cards) {
						var card = deck.cards[cardInterator];
						var imagePath = card.getCardFrontPath();
						cardsHtml += '<img style="padding:1mm" deck-index="' + cardInterator + '" src="' + imagePath + '" class="light-box game-card">';
					}


					var modalHtml =
						'<div class="modal fade" id="' + deckName + 'Modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
						'<div class="modal-dialog" role="document">' +
						'<div class="modal-content">' +
						'<div class="modal-header">' +
						'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
						'</div>' +
						'<div style="text-align:center" class="modal-body">' +
						cardsHtml +
						'</div>' +
						'</div>' +
						'</div>' +
						'</div>';

					var modal = $compile(modalHtml)(scope);
					$('body').append(modal);
					element.bind('click', showDeck);
				});
			}
		};

		function showDeck() {
			$('#' + $(this).attr('deck-name') + 'Modal').modal();
		}

		return directiveDefinitionObject;
	}
})();