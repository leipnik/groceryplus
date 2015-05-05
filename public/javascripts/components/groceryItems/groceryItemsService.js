// GroceryItem Service
angular.module('GroceryApp').factory('GroceryItemsService', [ '$http', function($http) {

	// GroceryItem class
	function GroceryItem(title, done, createdOn) {
		// Public properties
		this.title = title;
		this.done = done;
		this.createdOn = createdOn;
	}

	var serviceInstance = {
		items: [],

		list: function() {
			$http.get('/items').success(function(data) {
				angular.copy(data, serviceInstance.items);
			});
			return serviceInstance.items;
		},
		addItem: function(title) {
			// don't add blanks
			if (title && title !== '') {			
				var item = new GroceryItem(title, false, new Date());
				$http.post('/items', item).success(function(data) {
					serviceInstance.items.push(data);
				}); // TODO: add a failure case
			}
		},
		saveItem: function(item) {
			$http.post('/items/' + item._id + '/update', item).success(function(data) {
				// save succeeded
				angular.copy(data, item);
			}); // TODO: add a failure case
		},
		deleteItemByIndex: function(itemIndex) {
			var item = serviceInstance.items[itemIndex];
			$http.post('/items/' + item._id + '/delete', item).success(function(data) {
				serviceInstance.items.splice(itemIndex,1);
			});
		}
	};
	return serviceInstance;
}]);
