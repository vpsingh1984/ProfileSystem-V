
//var myApp = angular.module('profile', ['ngRoute']);
myApp.controller('carlistCtrl', ['$scope', '$http','CarlistService', function($scope, $http,CarlistService){

	var refresh;
	$scope.cars= "Car List";

	refresh = function () {
		//console.log("calling car list");
		CarlistService.getList().then(function (response) {
			$scope.carlist = response;
			$scope.cars = "";
		}).catch(function (err) {
			console.log(err);
		});
		//console.log($scope.carlist);
	};
	refresh();

	$scope.addcars = function(cars){
		//console.log($scope.cars);
		CarlistService.addCarList($scope.cars).then(function(response){
			console.log(response);
			refresh();
		}).catch(function(err){
			console.log(err);
		});
	};

	$scope.remove = function(id){
		CarlistService.remove(id).then(function(response){
			console.log(response);
			refresh();
		}).catch(function(err){
			console.log(err);
		})
	}

	$scope.edit = function(id){
		CarlistService.edit(id).then(function(response){
			console.log(response);
			$scope.cars = response;
			//refresh();
		}).catch(function(err){
			console.log(err);
		})
	}

	$scope.update = function(car){
		CarlistService.update(car).then(function(response){
			refresh();
		}).catch(function(err){
			console.log(err);
		})
	}


}]);