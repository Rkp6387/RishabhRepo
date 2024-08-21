angular.module('YourApp')
.controller('MyInfoController', function($scope, UserService) {
  $scope.user = UserService.getUserInfo();

  if (!$scope.user) {
    $scope.notSignedUp = true;
  } else {
    $scope.notSignedUp = false;
  }
});
