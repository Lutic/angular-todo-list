(function () {

  "use strict";

  angular.module("app")
    .directive("todoItem", todoItem);

  function todoItem () {
    return {
      templateUrl: "components/todo-item/todo-item.html"
    };
  }

})();