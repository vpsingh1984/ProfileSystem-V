
myApp.service('ContactlistService', ['$http', '$q', function($http, $q) {

    this.getList = function(limit, page) {
        var deferred = $q.defer();
        $http.get('/product/contactlist/'+limit+"/"+page).success(deferred.resolve)
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

    this.getContactById = function (id){
        var deferred = $q.defer();
        console.log(id);
        $http.get('/product/contactlist/' + id).success(deferred.resolve)
            .error(deferred.reject);

        return deferred.promise;
    }

    this.update = function(contact){
        var deferred = $q.defer();
        var contact = contact;
        console.log(contact);
        $http.put('/product/contactlist/', contact).success(deferred.resolve)
            .error(deferred.reject);
        return deferred.promise;
    }

}]);



