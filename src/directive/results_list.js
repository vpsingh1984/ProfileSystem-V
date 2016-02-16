(function() {
    "use strict";
    myApp.controller("ResultsListCtrl", ResultsListCtrl);


    function ResultsListCtrl($scope) {
        var vm = this;
        vm.isChecked = false;
        vm.toggleAll =  toggleAll;
        vm.selectedResults = selectedResults;

        function selectedResults(){
            var localResult = {};
            localResult.data = [];
            localResult.allSelected = false;
            for(var i=0; i<vm.results.length; i++){
                if(vm.results[i].isChecked === true){
                    localResult.data.push(vm.results[i]);
                }
            }
            if(vm.results.length === localResult.data.length){
                localResult.allSelected = true;
            }
            return localResult;
        }


        function toggleAll() {
            vm.isChecked = !vm.isChecked;
            for(var i=0; i<vm.results.length; i++){
                vm.results[i].isChecked = vm.isChecked
            }

            //if(vm.isChecked){
            //    for(var i=0; i<vm.results.length; i++){
            //        vm.results[i].isChecked = true;
            //    }
            //}
            //else{
            //    for(var i=0; i<vm.results.length; i++){
            //        vm.results[i].isChecked = false;
            //    }
            //}
        };
    }
}());