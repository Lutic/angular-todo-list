(function () {

    "use strict";

    angular.module("app")
        .controller("Todo", Todo);

    function Todo($rootScope, todoListService, todoService, USER_DATA) {
        let $ctrl = this;

        Object.assign($ctrl, todoService);
        Object.assign($ctrl, todoListService);

        init();

        $rootScope.$on("edit-item", function () {
            $ctrl.newItem = todoService.editedItem();

            $ctrl.newItem.deadline = new Date(todoService.editedItem().deadline); //new Date(deadline[0], deadline[1]-1, deadline[2]);

            $ctrl.newItem.id = todoService.editedItem().id;
            $ctrl.newItem.action = todoService.editedItem().action;
            $ctrl.newItem.done = todoService.editedItem().done;
            $ctrl.newItem.responsible = todoService.editedItem().responsible;
            $ctrl.newItem.estimation = parseInt(todoService.editedItem().estimation);
        });

        $rootScope.$on("save-item", function () {
            $ctrl.newItem = todoService.editedItem();
        });

        function init() {
            $ctrl.user = USER_DATA;
            $ctrl.showComplete = true;
        }
    }

})();