
myApp.controller('EditContactCtrl', function (ContactlistService, $uibModalInstance, contact) {
  var vm = this;
  var contact = contact;
  // vm.contact.name = contact.name;
  // vm.contact.email = contact.email;
  // vm.contact.number = contact.number;

  vm.close = function (){
    $uibModalInstance.close();
  }

  vm.contact = function (contact){
    alert('hello');
    var contact = contact;
    vm.contact.name = contact.name;
    vm.contact.email = contact.email;
    vm.contact.number = contact.number;
    
    ContactlistService.edit(contact).then(function (response) {
      $uibModalInstance.close();
    });
  }

  vm.updateContact = function(contact){
    ContactlistService.update(contact.id).then(function(response){
      refresh();
    }).catch(function(err){
      console.log(err);
    })
  }

});