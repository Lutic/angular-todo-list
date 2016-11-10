(function () {

    "use strict";

    angular.module("app")
        .controller("Todo", Todo);

    function Todo($rootScope, todoListService, todoService, USER_DATA) {
        let $ctrl = this;



        // $ctrl.incompleteCount = todoService.incompleteCount;
        // $ctrl.warningLevel = todoService.warningLevel;
        Object.assign($ctrl, todoService);
        Object.assign($ctrl, todoListService);

        init();

        $rootScope.$on("edit-item", function () {
            $ctrl.newItem = {};
            $ctrl.newItem.id = todoService.editedItem().id;
            $ctrl.newItem.action = todoService.editedItem().action;
            $ctrl.newItem.done = todoService.editedItem().done;
            $ctrl.newItem.deadline = Date.parse(todoService.editedItem().deadline);
            $ctrl.newItem.responsible = todoService.editedItem().responsible;
            $ctrl.newItem.estimation = parseInt(todoService.editedItem().estimation);
        });

        function init() {
            $ctrl.user = USER_DATA;
            $ctrl.showComplete = true;
        }
    }

})();