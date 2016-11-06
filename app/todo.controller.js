(function () {

  "use strict";

  angular.module("app")
    .controller("Todo", Todo);

  function Todo (model, todoService) {
    let $ctrl = this;

    $ctrl.todo = model;
    $ctrl.html = "<span>Vitaliy</span>";
    $ctrl.showComplete = true;

    // $ctrl.incompleteCount = todoService.incompleteCount;
    // $ctrl.warningLevel = todoService.warningLevel;
    Object.assign($ctrl, todoService);
  };

})();