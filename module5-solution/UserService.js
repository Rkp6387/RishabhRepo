angular.module('YourApp')
.service('UserService', function() {
  let userInfo = null;

  this.saveUserInfo = function(user) {
    userInfo = user;
  };

  this.getUserInfo = function() {
    return userInfo;
  };
});
