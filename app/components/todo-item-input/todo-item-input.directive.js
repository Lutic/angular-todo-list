(function () {

  "use strict";

  angular.module("app")
    .directive("todoItemInput", todoItemInput);

  function todoItemInput () {
    return {
      templateUrl: "components/todo-item-input/todo-item-input.html"
    };
  }

})();