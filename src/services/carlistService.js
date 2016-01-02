
myApp.service('CarlistService', ['$http', '$q', function($http, $q) {

    this.getList = function() {
        var deferred = $q.defer();
        $http.get('/product/carlist').success(deferred.resolve)
            .error(deferred.reject);

        return deferred.promise;
    }

    this.addCarList = function (car){
        var deferred = $q.defer();
        $http.post('/product/carlist', car).success(deferred.resolve)
            .error(deferred.reject);

        return deferred.promise;
    }

    this.remove = function (id){
        var deferred = $q.defer();
        console.log(id);
        $http.delete('/product/carlist/' + id).success(deferred.resolve)
            .error(deferred.reject);

        return deferred.promise;
    }

    this.edit = function (id){
        var deferred = $q.defer();
        console.log(id);
        $http.get('/product/carlist/' + id).success(deferred.resolve)
            .error(deferred.reject);

        return deferred.promise;
    }

    this.update = function(car){
        var deferred = $q.defer();
        //console.log("data comes into service");
        console.log(car);
        $http.put('/product/carlist/', car).success(deferred.resolve)
            .error(deferred.reject);
        return deferred.promise;
    }

}]);



