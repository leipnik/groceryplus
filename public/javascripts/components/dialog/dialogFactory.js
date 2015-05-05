angular.module('GroceryApp')

.factory('Dialog', ['$mdDialog', function DialogFactory ($mdDialog) {
  return {
    open: function (url, ctrl, locals) {
      return $mdDialog.show({
        templateUrl: url,
        controller: ctrl,
        locals: {
          items: locals
        }
      });
    },
  }
}]);