
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

    this.remove = function (id){
        var deferred = $q.defer();
        console.log(id);
        $http.delete('/product/contactlist/' + id).success(deferred.resolve)
            .error(deferred.reject);

        return deferred.promise;
    }

    this.edit = function (id){
        var deferred = $q.defer();
        console.log(id);
        $http.get('/product/contactlist/' + id).success(deferred.resolve)
            .error(deferred.reject);

        return deferred.promise;
    }

    this.update = function(car){
        var deferred = $q.defer();
        //console.log("data comes into service");
        console.log(car);
        $http.put('/product/contactlist/', car).success(deferred.resolve)
            .error(deferred.reject);
        return deferred.promise;
    }

}]);



