
myApp.controller('AddContactCtrl', function (ContactlistService, $uibModalInstance, contact) {
  var vm = this;
  //vm.item = item;
  vm.message = "Are You Sure?";

  vm.close = function (){
    $uibModalInstance.close();
  }

  vm.addContact = function (contact){
    alert('hello');
    ContactlistService.addContactList(contact).then(function (response) {
      $uibModalInstance.close();
    });
  }

});