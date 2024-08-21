angular.module('YourApp')
.controller('SignUpController', function($scope, $http, UserService) {
  $scope.user = {};
  $scope.menuError = false;
  $scope.infoSaved = false;

  $scope.submitForm = function(form) {
    if (form.$valid) {
      const menuNumber = $scope.user.menuNumber;
      const categoryShortName = menuNumber.charAt(0).toUpperCase();
      const menuItemIndex = parseInt(menuNumber.slice(1)) - 1; // Assuming menu numbers start from 1

      // Fetch the menu item from the REST endpoint
      const url = `https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/${categoryShortName}/menu_items/${menuItemIndex}.json`;

      $http.get(url).then(function(response) {
        if (response.data) {
          // Save user info using the service
          UserService.saveUserInfo($scope.user);
          $scope.infoSaved = true;
          $scope.menuError = false;
        } else {
          $scope.menuError = true;
        }
      });
    }
  };
});
