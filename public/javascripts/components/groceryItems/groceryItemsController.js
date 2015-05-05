// the main controller to modify the todo items
angular.module('GroceryApp')

.controller('GroceryItemsCtrl', [
	'$scope',
	'GroceryItemsService',
	'Dialog',
	function ($scope, GroceryItemsService, Dialog) {
		$scope.test = 'Grocery Plus!';
		$scope.items = GroceryItemsService.list();
		$scope.addItem = function() {
			// don't add blanks
			if ($scope.title && $scope.title !== '') {
				var ret = GroceryItemsService.addItem($scope.title);
				$scope.title = ''; // clear it after, if added
			}
		};
		$scope.saveItem = GroceryItemsService.saveItem;
		$scope.deleteItemByIndex = GroceryItemsService.deleteItemByIndex;

		$scope.openDialog = function() {
			var url = '/templates/dialogTemplate.html',
			ctrl = 'DialogCtrl',
			locals = []
			Dialog.open(url, ctrl, locals);
		}
	}
]);