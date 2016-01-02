
myApp.controller('AddCarCtrl', function (CarlistService, $uibModalInstance, car) {
  var vm = this;
  //vm.item = item;
  vm.message = "Are You Sure?";

  vm.close = function (){
    $uibModalInstance.close();
  }

  vm.addCar = function (car){
    alert('hello');
    CarlistService.addCarList(car).then(function (response) {
      $uibModalInstance.close();
    });
  }

});