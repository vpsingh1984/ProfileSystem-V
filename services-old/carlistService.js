
myApp.service('CarlistService', ['$http', function($http) {

    this.getList = function() {
        var deferred = $q.defer();
        $http.get('/carlist').success(deffered.resolve)
            .error(deferred.reject);

        return deferred.promise;
    }



}]);



