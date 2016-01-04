(function() {
    "use strict";
    myApp.controller("ResultsListCtrl", ResultsListCtrl);
    function ResultsListCtrl(){
        var vm = this;
        initialize();
        vm.remove = remove;

        function initialize() {
            vm.getFilterData = getFilterData;
        }
        function getFilterData(obj, key){
            //console.log(obj);
            //console.log(key);
            //console.log("8888888888888888");
            return obj[key] === undefined ? "---": obj[key];
        }


        function remove(id){
            alert(id+"Rachit");

        }
    }

}());