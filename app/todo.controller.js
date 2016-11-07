(function () {

    "use strict";

    angular.module("app")
        .controller("Todo", Todo);

    function Todo(todoListService, todoService, USER_DATA) {
        let $ctrl = this;

        init();

        // $ctrl.incompleteCount = todoService.incompleteCount;
        // $ctrl.warningLevel = todoService.warningLevel;
        Object.assign($ctrl, todoService);
        Object.assign($ctrl, todoListService);

        console.log($ctrl.editMode());

        function init() {
            $ctrl.user = USER_DATA;
            $ctrl.showComplete = true;
        }
    }

})();