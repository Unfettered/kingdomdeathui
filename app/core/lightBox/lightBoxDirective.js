(function () {
	'use strict';
	angular
		.module('core.lightBox')
		.directive('lightBox', lightBox);

	function lightBox() {
		var directiveDefinitionObject = {
			restrict: 'C',
			scope: '=',
			link: function (scope, element, attrs) {
				element.bind('dblclick', showCard);
			}
		};
		function showCard(){

			var modalHtml =
				'<div class="modal fade" id="cardModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
					'<div class="modal-dialog" role="document">' +
						'<div class="modal-content">' +
							'<div class="modal-header">' +
								'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
							'</div>' +
							'<div style="text-align:center" class="modal-body">' +
								'<img style="width:90%" src="'+$(this).attr('src')+'">'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>'


				var modal = $(modalHtml);
				modal.modal();
			}
			return directiveDefinitionObject;
	}
})();