(function () {
	'use strict';
	angular
		.module('core.toggleTokenClass')
		.directive('toggleTokenClass', toggleTokenClass);


	function toggleTokenClass() {
		var directiveDefinitionObject = {
			restrict: 'C',
			scope: '=',
			link: function (scope, element, attrs) {
				var stat = attrs.stat;

				scope.$watch('view.monster.' + stat, function () {
					var statValue = scope.view.monster[stat];
					var token = angular.element(element[0].getElementsByClassName('token')[0]);

					if (statValue < 0) {
						token.removeClass(stat + '-token');
						token.addClass('negative-' + stat + '-token');
					} else {
						token.removeClass('negative-' + stat + '-token');
						token.addClass(stat + '-token');
					}
				});
			}
		};
		return directiveDefinitionObject;
	}
})();