(function() {
    "use strict";
    myApp.directive("resultsList", resultsList);

    function resultsList(){
        return {
            //bindToController: true,
            controller: "ResultsListCtrl as vm",
            restrict: "E",
            scope: {
                results: "=",
                columns:"=",
                itemActions: "=",
            },
            templateUrl: "directive/result_list.html",
            transclude: true,
        }

    }

}());