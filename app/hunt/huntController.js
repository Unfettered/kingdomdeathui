(function () {
	'use strict';
	angular.module('kingdom-death-ui.hunt')
		.controller('huntController', huntControlller);

	huntControlller.$inject = ['monster', 'monsterDefinition', 'card', '$state'];

	function huntControlller(monster, monsterDefinition, card, $state) {
		var cardService = card;
		this.monster = monster;
		if (monster.name == "") {
			$state.go('kingdom-death-ui.setup');
		} else {

		}
		this.randomHuntEvent = randomHuntEvent;
		this.flipCard = flipCard;
		function randomHuntEvent() {
			var roll = Math.floor(Math.random() * 99 + 1);

			var modalHtml =
				'<div class="modal fade" id="cardModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
				'<div class="modal-dialog" role="document">' +
				'<div class="modal-content">' +
				'<div class="modal-header">' +
				'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
				'</div>' +
				'<div style="text-align:center" class="modal-body">' +
				'<img style="width:95%" src="/images/RandomHuntEvents/' + roll + '.png">' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</div>'


			var modal = $(modalHtml);
			modal.modal();
		}

		function flipCard() {
			var element = event.target;
			var deckName = $(event.target).attr('deck-name');
			var index = $(event.target).attr('deck-index');
			var facing = $(event.target).attr('facing');
			var deck = monster[deckName];
			var card = deck.cards[index];

			if (facing == 'back') {
				$(event.target).attr('facing','front');
				$(event.target).attr('src', card.getCardFrontPath());
			}

		}
	}
})();