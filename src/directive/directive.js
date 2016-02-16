(function() {
    "use strict";
    myApp.directive("resultsList", resultsList);

    function resultsList() {
        return {
            bindToController: true,
            controller: "ResultsListCtrl",
            controllerAs:"vm",
            restrict: "E",
            scope: {
                results: "=",
                columns: "=",
                itemActions: "=",
                otherActions: "=",
                showCheckboxes: "=",
                paginationData: "=",
                bulkActions: "=",
            },
            templateUrl: "directive/result_list.html",
            transclude: true
        }
    }
}());