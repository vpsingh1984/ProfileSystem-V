
var myApp = angular.module('profile', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ui.bootstrap.pagination']);

myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/login', {
                templateUrl: 'user-auth/login.html',
                controller: 'signinCtrl as vm'
            }).
            when('/register', {
                templateUrl: 'user-auth/register.html',
                controller: 'registerCtrl'
            }).
            when('/contactlist', {
                templateUrl: 'contact-list/contactlist.html',
                controller: 'contactlistCtrl as vm'
            }).
            when('/carlist', {
                templateUrl: 'car-list/carlist.html',
                controller: 'carlistCtrl as vm'
            }).
            otherwise({
                redirectTo: '/login'
            });
    }]);