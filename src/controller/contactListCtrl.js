(function(){

	myApp.controller('contactlistCtrl', contactlistCtrl);

	//var refresh = function(){
	//	ContactlistService.getList().then(function (response) {
	//		$scope.contactlist = response;
	//		$scope.cars = "";
	//	}).catch(function (err) {
	//		console.log(err);
	//	});
    //
	//};
	function contactlistCtrl(ContactlistService) {

		//var refresh;
		var vm = this;
		vm.results = [];
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

		};
	}


}());