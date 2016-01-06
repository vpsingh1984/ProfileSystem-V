(function() {
    "use strict";
    myApp.controller("ResultsListCtrl", ResultsListCtrl);
    function ResultsListCtrl(){
        var vm = this;
        initialize();
        //vm.remove = remove;

        function initialize() {
            vm.getFilterData = getFilterData;
        }
        function getFilterData(obj, key){
            return obj[key] === undefined ? "---": obj[key];
        }


        //function remove(id){
        //    alert(id+"Rachit");
        //
        //}
    }

}());