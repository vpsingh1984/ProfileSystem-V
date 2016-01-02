(function(){

	myApp.controller('carlistCtrl', carlistCtrl);

	function carlistCtrl(CarlistService, $uibModal, $log, $scope) {

		var vm = this;
		vm.results = [];
		vm.confirmModal=confirmModal;

		initialize();

		function initialize() {
			console.log("calling car list");
			CarlistService.getList().then(function (response) {
				vm.results = response;
			});
			vm.columns = [{
				label: "Brand Name",
				field: "brand"
			}, {
				label: "Modal",
				field: "modal"
			}, {
				label: "Price",
				field: "price"
			}];

			vm.itemActions = [{
				label: "Remove",
				handler: vm.confirmModal,
			}];
		};

		function confirmModal(item) {
			//alert('vijay');
		    var modalInstance = $uibModal.open({
		      animation: true,
		      templateUrl: "contact-list/confirm_modal.html",
		      controller: 'CarConfirmModalCtrl as vm',

		      size: "sm",
		      resolve: {
		        item: function () {
		           return item;
		         }
		      }
		    });

		    modalInstance.result.then(function (response) {
		      	var flag = response;
		      	console.log("close");
		      	if(flag){
			      	CarlistService.getList().then(function (response) {
						vm.results = response;
					});
		      	}
		    }, function () {
		    	console.log("Dismiss");
		      $log.info('Modal dismissed at: ' + new Date());
		    });
		};


	}

}());