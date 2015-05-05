// configure ui-router angular plugin
angular.module('MainApp')

.config([
	'$stateProvider',
	'$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		'use strict';

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: '/home.html',
				controller: 'GroceryItemsCtrl'
			});

		$urlRouterProvider.otherwise('home'); // for unspecified routes

	}
]);