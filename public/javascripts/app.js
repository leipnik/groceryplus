(function () {
	'use strict';

	angular.module('GroceryApp', []);

	angular.module('MainApp', [
			'GroceryApp',
			'ngMaterial',
			'ui.router',
			'ngMdIcons'
		]
	);
})();