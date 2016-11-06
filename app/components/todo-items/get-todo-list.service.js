(function () {

  "use strict";

  angular.module("app")
    .run(getTodoList);

  function getTodoList ($http, model) {
    $http
      .get("components/todo-items/todo.json")
      .then( (response) => {
        model.items = response.data;
      }
      );
  }

})();