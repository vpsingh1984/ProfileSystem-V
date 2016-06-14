
myApp.controller('registerCtrl', ['$scope', '$http', function ($scope, $http, SignupService) {
  //var vm = this;
  
  $scope.newUser = function(user){
    alert('hello');
    SignupService.addUser(user).then(function (response) {
      alert('record added');
    });
  };  

}]);