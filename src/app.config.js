
var myApp = angular.module('profile', ['ngRoute']);

myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/signin.html',
                controller: 'signinCtrl as sign'
            }).
            when('/contactlist', {
                templateUrl: 'views/contactlist.html',
                controller: 'contactlistCtrl as vm'
            }).
            when('/carlist', {
                templateUrl: 'views/carlist.html',
                controller: 'carlistCtrl as vm'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);