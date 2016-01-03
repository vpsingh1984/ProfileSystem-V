(function(){

	myApp.controller('contactlistCtrl', contactlistCtrl);

	function contactlistCtrl(ContactlistService, $uibModal, $log, $scope) {

		var vm = this;
		vm.results = [];
		vm.removeConfirmModal=removeConfirmModal;
		vm.addContactModal = addContactModal;
		vm.editContactModal = editContactModal;

		initialize();

		function initialize() {
			ContactlistService.getList().then(function (response) {
				vm.results = response;
			});
			vm.columns = [{
				label: "Name",
				field: "name"
			}, {
				label: "Email",
				field: "email"
			}, {
				label: "Number",
				field: "number"
			}];

			vm.itemActions = [{
				label: "Remove",
				handler: vm.removeConfirmModal,
			},
			{
				label: "Edit",
				handler: vm.editContactModal,
			}];

			vm.otherActions = [{
				label: "Add New Contact",
				handler: vm.addContactModal,
			}];

		};

		function removeConfirmModal(item) {
			//alert('vijay');
		    var modalInstance = $uibModal.open({
		      animation: true,
		      templateUrl: "contact-list/contactlist_confirm_modal.html",
		      controller: 'ContactConfirmModalCtrl as vm',

		      size: "sm",
		      resolve: {
		        item: function () {
		           return item;
		         }
		      }
		    });

		    modalInstance.result.then(function (response) {
		      	ContactlistService.getList().then(function (response) {
					vm.results = response;
				});
		    }, function () {
		    	console.log("Dismiss");
		      $log.info('Modal dismissed at: ' + new Date());
		    });
		};
		//Add new list
		function addContactModal(contact) {
			//alert('vijay');
		    var modalInstance = $uibModal.open({
		      animation: true,
		      templateUrl: "contact-list/add_contactlist.html",
		      controller: 'AddContactCtrl as vm',

		      size: "md",
		      resolve: {
		        contact: function () {
		           return contact;
		        }
		      }
		    });

		    modalInstance.result.then(function (response) {
		      	//var flag = response;
		      	ContactlistService.getList().then(function (response) {
					vm.results = response;
				});
		    }, function () {
		    	console.log("Error in adding");
		      //$log.info('Modal dismissed at: ' + new Date());
		    });
		};

		function editContactModal(contact) {
			//alert('vijay');
		    var modalInstance = $uibModal.open({
		      animation: true,
		      templateUrl: "contact-list/edit_contactlist.html",
		      controller: 'EditContactCtrl as vm',

		      size: "md",
		      resolve: {
		        contact: function () {
		           return contact;
		        }
		      }
		    });

		    modalInstance.result.then(function (response) {
		      	vm.contact = response;
		      	ContactlistService.getList(contact).then(function (response) {
					vm.contact = response;
				});
		    }, function () {
		    	console.log("Error in adding");
		      //$log.info('Modal dismissed at: ' + new Date());
		    });
		};

	}


}());