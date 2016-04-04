(function () {
	'use strict';
	angular
		.module('core.cardDeck')
		.directive('cardDeck', cardDeck);
	cardDeck.$inject = ['monster', '$compile'];

	function cardDeck(monster, $compile) {
		var directiveDefinitionObject = {
			restrict: 'C',
			scope: '=',

			link: function (scope, element, attrs) {
				var deckName = attrs.deckName;
				var deck = scope.view.monster[deckName];

				scope.$watchGroup(
					[
						'view.monster.' + deckName + '.length()',
						'view.monster.' + deckName + '.cards[0].name'
					], function () {
					$('#' + deckName + 'Modal').remove();

					var cardsHtml = '';

					for (var cardInterator in deck.cards) {
						var card = deck.cards[cardInterator];
						var imagePath = card.getCardFrontPath();
						cardsHtml += '<img style="padding:1mm" deck-name="'+deckName+'" deck-index="' + cardInterator + '" src="' + imagePath + '" class="light-box game-card">';
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
					//$('#'+deckName + 'Modal').html(modal);
					$('body').append(modal);
					element.bind('dblclick', showDeck);
				});

				element.bind('dragstart', dragCardFromDeck);
				element.bind('dragend', dropCardFromDeck);


				function showDeck() {
					$('#' + $(this).attr('deck-name') + 'Modal').modal();
				}

				function dragCardFromDeck(event) {
					this.scope = scope;
					this.deckName = deckName;
					this.monster = monster;

					monster.activeCard = monster[deckName].pullNextCard();

				}

				function dropCardFromDeck(event) {
					this.scope = scope;
					this.deckName = deckName;
					this.monster = monster;

					//no target aquired
					if (!$('.highlighted-area').length && this.monster.activeCard) {
						scope.$apply(function(){
							monster[deckName].addCard(monster.activeCard);
						});
						this.monster.activeCard = null;
					}

				}

			}
		};

		return directiveDefinitionObject;
	}
})();