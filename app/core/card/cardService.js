(function () {
	'use strict';
	angular
		.module('core.card')
		.service('card', card);

	card.$inject = [];

	function card() {
		this.get = function (name, monster, type, aiLevel) {
			var newCard = {
				name: name,
				monster: monster,
				type: type,
				aiLevel: aiLevel,
				getCardBackPath: getCardBackPath,
				getCardFrontPath: getCardFrontPath
			}

			function getCardBackPath() {
				var imagePath = '/images/Monsters/' + this.monster + '/' + this.type + '/Back.png';
				return imagePath;
			}

			function getCardFrontPath() {
				var imagePath = '';
				if (this.type == 'AI') {
					imagePath = '/images/Monsters/' + this.monster + '/' + this.type + '/' + this.aiLevel + '/' + this.name + '.png';
				} else {
					imagePath = '/images/Monsters/' + this.monster + '/' + this.type + '/' + this.name + '.png';
				}

				imagePath = imagePath.replace('\'','');
				imagePath = imagePath.replace('’','');

				return imagePath;
			}
			return newCard;
		}
	}
})();