
myApp.controller('EditContactCtrl', function (ContactlistService, $uibModalInstance, contactId) {
  var vm = this;
  //vm.contact = contact;
  getContact(contactId);
  vm.updateContact = updateContact;

  vm.close = function (){
    $uibModalInstance.close();
  }


  function getContact(id) {
    console.log(id);
    ContactlistService.getContactById(id).then(function(response){
      vm.contact = response;
    }).catch(function(err){
      console.log(err);
    })
  };

  function updateContact(contact){
    ContactlistService.update(contact).then(function(response){
      $uibModalInstance.close();
    }).catch(function(err){
      console.log(err);
    })
  }

});