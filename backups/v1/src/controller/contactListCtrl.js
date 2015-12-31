
//var myApp = angular.module('profile', ['ngRoute']);
myApp.controller('contactlistCtrl', ['$scope', '$http','ContactlistService', function($scope, $http, ContactlistService){

	$scope.title= "vijay";

	var refresh = function(){
		ContactlistService.getList().then(function (response) {
			$scope.contactlist = response;
			$scope.cars = "";
		}).catch(function (err) {
			console.log(err);
		});
	};
	refresh();

	$scope.addContact = function(contact){
		//console.log($scope.cars);
		ContactlistService.addContactList($scope.contact).then(function(response){
			console.log(response);
			refresh();
		}).catch(function(err){
			console.log(err);
		});
	};


}]);