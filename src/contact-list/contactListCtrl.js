(function(){

	myApp.controller('contactlistCtrl', contactlistCtrl);

	function contactlistCtrl(ContactlistService, $uibModal, $log, $scope) {

		var vm = this;
		$scope.title = 'Lorem Ipsum';
		vm.results = [];
		vm.removeConfirmModal=removeConfirmModal;
		vm.addContactModal = addContactModal;
		vm.editContactModal = editContactModal;
		vm.onPageChanged = onPageChanged;
		vm.confirmRemoveRecords = confirmRemoveRecords;
		var limit = 5;
		var page = 1;

		initialize();

		function initialize() {
			fetchData(true);
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

			vm.bulkActions = [{
				label: "Add New Contact",
				handler: vm.addContactModal,
			}, {
				label: "Remove Records",
				handler: vm.confirmRemoveRecords,
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


		function fetchData(isFirstCall){
			ContactlistService.getList(limit, page).then(function (response) {
				vm.results = response.data;
				if(isFirstCall){
					vm.paginationData = {
						totalItems: response.totalItems,
						currentPage:1,
						itemPerPage:limit,
						handler : vm.onPageChanged
					}
				}
			});
		}


		function onPageChanged(){
			page = vm.paginationData.currentPage;
			fetchData();
		}

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
				vm.paginationData.totalItems--;
				fetchData();
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
				vm.paginationData.totalItems++;
				fetchData();
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
		        contactId: function () {
		           return contact._id;
		        }
		      }
		    });

		    modalInstance.result.then(function (response) {
				fetchData();
		    }, function () {
		    	console.log("Error in adding");
		      //$log.info('Modal dismissed at: ' + new Date());
		    });
		};

		function confirmRemoveRecords () {
			alert("hello vj");
			/**
			 * Open a confirmation modal to prompt the user before removing selected Event(s)
			 * @param {object|array} events The selected Event or Array of selected Events
			 */
			//ConfirmModalService.openModal({message: "Are you sure you want to remove the Event(s)?"})
			//	.then(function() {
			//		removeEvents(events);
			//	});
		};

	}

	//alert(window.watcher());

}());