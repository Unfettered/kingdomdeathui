(function () {
	'use strict';

	angular
		.module('kingdom-death-ui')

		.config(function ($stateProvider, $urlRouterProvider) {
			// For any unmatched url, redirect to /state1
			$urlRouterProvider.otherwise("/unathenticated");
			// Now set up the states
			$stateProvider
				.state('kingdom-death-ui', {
					url: "",
					abstract: true,
					templateUrl: "layout/layout.html"
				})

				.state('kingdom-death-ui.login', {
					url: "/login",
					views: {
						"main": {
							template: "login/login.html",
							controller: 'loginController as view'
						}//check if you need .html
					}
				})

				.state('kingdom-death-ui.menu', {
					url: "/menu",
					views: {
						"main": {
							template: "menu/menu.html",
							controller: 'menuController as view'
						}//check if you need .html
					}
				})

				.state('kingdom-death-ui.setup', {
					url: "/setup",
					views: {
						"main": {
							controller: 'setupController as view',
							template: "setup/setup.html"
						},
						"menu": {
							controller: 'menuController as view',
							template: "menu/menu.html"
						}
					}
				})

				.state('kingdom-death-ui.setup.monster-list', {
					url: "/setup/monster-list",
					views: {
						"main": {
							controller: 'monsterListController as view',
							template: "setup/monsterList/monster-list.html"
						}
					}
				});
		});


})();