
myApp.service('SigninService', ['$http', '$q', function($http, $q) {

    // this.signIn = function(params) {
    //     var deferred = $q.defer();
    //     $http.get('/usersignin').success(deferred.resolve)
    //         .error(deferred.reject);

    //     return deferred.promise;
    // }
    this.signIn = function(param) {
        var deferred = $q.defer();
        $http.post('/user/login', param).success(deferred.resolve)
            .error(deferred.reject);
        return deferred.promise;
    }

   

}]);








// (function () {
//   "use strict";

//   myApp.service("AdminMgmtService", AdminMgmtService);

//   /* @ngInject */
//   function AdminMgmtService($http, $q) {
//     //var baseUrl = "/response/initial/AdminMgmtServiceRes.xml/";

//     return {
//       signIn: signIn,
//       //signOut: signOut,
//     };

//     //////////

//     function signIn(params) {
//       // var params = {
//       //   userName: username,
//       //   password: password,
//       // };
//       console.log(params);
//       var deferred = $q.defer();
//         $http.get('/', params).success(deferred.resolve)
//             .error(deferred.reject);

//         return deferred.promise;

//       //return $http.get('/omi_signon', params).then(handleResponse); 

//       // function handleResponse(response) {
//       //   var result = response.result;
//       //   if (result.resultText == "Success") {
//       //     /**
//       //     * Save the user's credentials into local storage and transition to the application
//       //     * Also save username if 'remember me' is true
//       //     **/

//       //     // Set the session user information in local storage:
//       //     // userService.setUserInfo({
//       //     //   id: result.resultId,
//       //     //   handle: response.sessionHandle.handle,
//       //     // });

          
//       //   } else {
//       //     //AlertsService.addErrors(result.resultText);
//       //     console.log('error to login');
//       //   }

//         //return response;
//     }
//   }
// }());
