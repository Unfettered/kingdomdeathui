(function () {
	'use strict';
	angular
		.module('core.cardReceptacle')
		.directive('cardReceptacle', cardReceptacle);
	cardReceptacle.$inject = ['monster', '$compile'];

	function cardReceptacle(monster, $compile) {

		var directiveDefinitionObject = {
			restrict: 'C',
			scope: '=',

			link: function (scope, element, attrs) {
				var deckName = attrs.deckName;
				var deck = scope.view.monster[deckName];
				element.bind('dragover', dragOver);
				element.bind('dragleave', dragLeave);
				element.bind('drop', drop);


				function dragOver(e) {
					element.addClass('highlighted-area');
					e.stopPropagation();
					e.preventDefault();
					e.dataTransfer.dropEffect = 'copy';

				}

				function dragLeave(e) {
					element.removeClass('highlighted-area');
				}

				function drop(e) {
					this.monster = monster;
					this.deckName = deckName;
					e.stopPropagation();
					e.preventDefault();
					if (monster.activeCard) {
						scope.$apply(function(){monster[deckName].addCard(monster.activeCard)});
						monster.activeCard = null;
					}
					element.removeClass('highlighted-area');
				}
			}
		};

		return directiveDefinitionObject;
	}
})();