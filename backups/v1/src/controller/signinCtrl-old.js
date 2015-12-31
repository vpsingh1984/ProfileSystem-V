
//var myApp = angular.module('profile', ['ngRoute']);
myApp.controller('signinCtrl', signinCtrl);

function signinCtrl(SigninService,$http, $q){
    var vm = this;
    vm.signIn = signIn;








    function signIn(creds){
        param = {};
        param.username = creds.username;
        param.password = creds.password;
        // $http.get('/signinService.checkLogin', params).success(function(response){
        //     alert("Success: "+response);
        // }).error(function(error){
        //     alert("Fail: "+error);
        // });
        SigninService.signIn(param).then(handleSignInResponse, handleError);

       function handleSignInResponse(response){
            console.log(response);

       }
         function handleError(response){
            console.log(response);
            
       }



        // var deferred = $q.defer();
        // $http.post('/signin', param).success(deferred.resolve)
        //     .error(deferred.reject);

        // return deferred.promise;

    };
}