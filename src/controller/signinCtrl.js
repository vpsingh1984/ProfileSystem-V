
myApp.controller('signinCtrl', ['$scope', '$http','SigninService', '$window', function($scope, $http, SigninService, $window){
  this.signIn = function(creds){
    console.log("calling Signin");
    param = {};
    param.username = creds.username;
    param.password = creds.password;
    
    SigninService.signIn(param).then(handleSignInResponse, handleError);

    function handleSignInResponse(response){
        console.log(response);
        if(response.success){
          // go for success page.
          $scope.successMsg = "Login success.";
          $scope.errMsg = " ";
          $window.location.href = '#/carlist';
        }
        else{
          // show error message.
          $scope.errMsg = "Invalid credentials.";
          $scope.successMsg = "";
        }
    }
    function handleError(response){
      console.log(response);
        
    }
  };
}]);