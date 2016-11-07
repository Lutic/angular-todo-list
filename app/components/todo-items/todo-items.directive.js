(function () {

    "use strict";

    angular.module("app")
        .directive("todoItems", todoItems);

    function todoItems() {
        return {
            templateUrl: "components/todo-items/todo-items.html"
        };
    }

})();