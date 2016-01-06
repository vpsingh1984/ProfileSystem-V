
myApp.controller('EditCarCtrl', function (CarlistService, $uibModalInstance, carId) {
  var vm = this;
  //vm.contact = contact;
  getCar(carId);
  vm.updateCar = updateCar;

  vm.close = function (){
    $uibModalInstance.close();
  }


  function getCar(id) {
    console.log(id);
    CarlistService.getCarById(id).then(function(response){
      vm.car = response;
    }).catch(function(err){
      console.log(err);
    })
  };

  function updateCar(car){
    CarlistService.update(car).then(function(response){
      $uibModalInstance.close();
    }).catch(function(err){
      console.log(err);
    })
  }

});