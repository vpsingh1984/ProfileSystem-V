(function() {
    "use strict";
    myApp.controller("ResultsListCtrl", ResultsListCtrl);
    function ResultsListCtrl($scope){
        var vm = this;
        initialize()

        function initialize() {
            vm.getFilterData = getFilterData;
        }
        function getFilterData(obj, key){
            return obj[key] === undefined ? "---": obj[key];
        }

    }

}());