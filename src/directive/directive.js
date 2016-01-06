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
                otherActions: "=",
                showCheckboxes:"=",
                paginationData:"=",
            },
            templateUrl: "directive/result_list.html",
            transclude: true,
            //link: function(scope, el, attrs, ctrl, transclude) {
            //    el.find('.content').append(transclude());
            //}
        }

    }

}());