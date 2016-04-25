(function () {
	'use strict';

	angular
		.module('kingdom-death-ui')
		.config(function ($stateProvider, $urlRouterProvider) {
			// For any unmatched url, redirect to /login
			$urlRouterProvider.otherwise("/setup");
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
				.state('kingdom-death-ui.reset', {
					url: "/reset",
					views: {
						"main": {
							controller: 'resetController as view',
							templateUrl: "reset/reset.html"
						},
					}
				})
				.state('kingdom-death-ui.tokenTracker', {
					url: "/token-tracker",
					views: {
						"main": {
							controller: 'tokenTrackerController as view',
							templateUrl: "tokenTracker/token-tracker.html",
						},
					}
				})
				.state('kingdom-death-ui.showdown', {
					url: "/showdown",
					views: {
						"main": {
							controller: 'showdownController as view',
							templateUrl: "showdown/showdown.html",
						},
					}
				})
				.state('kingdom-death-ui.hunt', {
					url: "/hunt",
					views: {
						"main": {
							controller: 'huntController as view',
							templateUrl: "hunt/hunt.html",
						},
					}
				});
		});
})();