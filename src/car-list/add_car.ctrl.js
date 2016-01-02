
myApp.controller('CarListCtrl', function (CarlistService, $modalInstance, item) {
  var vm = this;
  vm.item = item;
  vm.message = "Are You Sure?";

  // vm.close = function (){
  //   $modalInstance.close(false);
  // }

  // vm.confirm = function (){
  //   CarlistService.remove(item._id).then(function (response) {
  //     $modalInstance.close(true);
  //   });
  // }

  $scope.addcars = function(cars){
		//console.log($scope.cars);
		CarlistService.addCarList($scope.cars).then(function(response){
			console.log(response);
			refresh();
		}).catch(function(err){
			console.log(err);
		});
	};

});