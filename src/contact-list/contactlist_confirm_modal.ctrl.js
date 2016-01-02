
myApp.controller('ContactConfirmModalCtrl', function (ContactlistService, $modalInstance, item) {
  var vm = this;
  vm.item = item;
  vm.message = "Are You Sure?";

  vm.close = function (){
    $modalInstance.close(false);
  }

  vm.confirm = function (){
    ContactlistService.remove(item._id).then(function (response) {
      $modalInstance.close(true);
    });
  }

});