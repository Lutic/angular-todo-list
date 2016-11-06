(function () {
    "use strict";

    angular.module("app", ["ngSanitize"]);

    angular.element(document).ready( () => {
        angular.bootstrap(document, ["app"]);
    });

})();