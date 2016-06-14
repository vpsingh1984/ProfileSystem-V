
myApp.service('SignupService', ['$http', '$q', function($http, $q) {

    this.addUser = function(user) {
        var deferred = $q.defer();
        $http.post('/user/signup', user).success(deferred.resolve)
            .error(deferred.reject);
        return deferred.promise;
    }

   

}]);


