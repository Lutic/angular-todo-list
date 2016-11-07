(function () {

    "use strict";

    angular.module("app")
        .service("todoListService", todoListService);

    function todoListService($http) {
        let self = this, todos;

        angular.extend(self, {
            "getTodoList": getTodoList
        });

        function init() {
            $http.get("components/todo-items/todo.json").then((response) => {
                todos = response.data;
            });
        }
        init();

        function getTodoList() {
            return todos;
        }
    }

})();