(function(){

	myApp.controller('carlistCtrl', carlistCtrl);

	function carlistCtrl(CarlistService, $uibModal, $log, $scope) {

		var vm = this;
		vm.results = [];
		vm.confirmModal=confirmModal;
		vm.addCarModal = addCarModal;
		vm.editCarModal = editCarModal;
		vm.onPageChanged = onPageChanged;
		var limit = 5;
		var page = 1;

		initialize();

		function initialize() {
			fetchData(true);
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
			},{
				label: "Edit",
				handler: vm.editCarModal,
			}];

			vm.otherActions = [{
				label: "Add New Car",
				handler: vm.addCarModal,
			}];
		};

		function fetchData(isFirstCall){
			CarlistService.getList(limit, page).then(function (response) {
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

		function confirmModal(item) {
			//alert('vijay');
		    var modalInstance = $uibModal.open({
		      animation: true,
		      templateUrl: "car-list/car_confirm_modal.html",
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

		function addCarModal(car) {
		    var modalInstance = $uibModal.open({
		      animation: true,
		      templateUrl: "car-list/add_carlist.html",
		      controller: 'AddCarCtrl as vm',
		      size: "md",
		      resolve: {
		        car: function () {
		           return car;
		        }
		      }
		    });

		    modalInstance.result.then(function (response) {
				vm.paginationData.totalItems++;
				fetchData();
		    }, function () {
		    	console.log("Error in adding");
		    });
		};

		function editCarModal(car) {
			//alert('vijay');

			var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: "car-list/edit_carlist.html",
				controller: 'EditCarCtrl as vm',
				size: "md",
				resolve: {
					carId: function () {
						return car._id;
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
	}

}());