(function(){

	myApp.controller('carlistCtrl', carlistCtrl);
//myApp.controller('carlistCtrl', ['$scope', '$http','CarlistService', function($scope, $http,CarlistService){
	function carlistCtrl(CarlistService) {

		//var refresh;
		var vm = this;
		vm.results = [];
		initialize();
		vm.remove = remove;


		function remove(id){
			alert(id);
		}

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

		};
	}

}());