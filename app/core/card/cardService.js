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
				uuid:generateUUID(),
				getCardBackPath: getCardBackPath,
				getCardFrontPath: getCardFrontPath,
				generateUUID:generateUUID
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

			function generateUUID() {
				var d = new Date().getTime();
				var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
					var r = (d + Math.random()*16)%16 | 0;
					d = Math.floor(d/16);
					return (c=='x' ? r : (r&0x3|0x8)).toString(16);
				});
				return uuid;
			};
			return newCard;
		}
	}
})();