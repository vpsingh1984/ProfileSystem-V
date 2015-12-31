
myApp.service('ContactlistService', ['$http', '$q', function($http, $q) {

    this.getList = function() {
        var deferred = $q.defer();
        $http.get('/product/contactlist').success(deferred.resolve)
            .error(deferred.reject);

        return deferred.promise;
    }

    this.addContactList = function (contact){
        var deferred = $q.defer();
        $http.post('/product/contactlist', contact).success(deferred.resolve)
            .error(deferred.reject);

        return deferred.promise;
    }

}]);



