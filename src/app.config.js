
var myApp = angular.module('profile', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/signin.html',
                controller: 'signinCtrl as sign'
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
                redirectTo: '/'
            });
    }]);