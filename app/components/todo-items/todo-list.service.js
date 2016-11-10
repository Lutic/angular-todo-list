(function () {

    "use strict";

    angular.module("app")
        .service("todoListService", todoListService);

    function todoListService($http) {
        // return {
        //     getTodoList,
        //     setTodoList
        // }

        let self = this, todos;

        init();

        angular.extend(self, {
            "getTodoList": getTodoList,
            "setTodoList": setTodoList
        });

        function init() {
            $http.get("components/todo-items/todo.json").then((response) => {
                todos = response.data;
            });
        }

        function getTodoList() {
            return todos;
        }
        
        function setTodoList(list) {
            todos = list;
            // return todos;
        }
    }

})();