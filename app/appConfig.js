(function () {
	'use strict';

	angular
		.module('kingdom-death-ui')

		.config(function ($stateProvider, $urlRouterProvider) {
			// For any unmatched url, redirect to /login
			$urlRouterProvider.otherwise("/login");
			// Now set up the states
			$stateProvider
				.state('kingdom-death-ui', {
					abstract: true,
					templateUrl: "layout/layout.html"
				})

				.state('kingdom-death-ui.login', {
					url: "/login",
					views: {
						"main": {
							templateUrl: "login/login.html",
							controller: 'loginController as view'
						}//check if you need .html
					}
				})

				.state('kingdom-death-ui.setup', {
					url: "/setup",
					views: {
						"main": {
							controller: 'setupController as view',
							templateUrl: "setup/setup.html"
						},
					}
				})

				.state('kingdom-death-ui.setup.monsterList', {
					url: "/setup/monster-list",
					views: {
						"main": {
							controller: 'monsterListController as view',
							templateUrl: "setup/monsterList/monster-list.html"
						},
					}
				});
		});


})();