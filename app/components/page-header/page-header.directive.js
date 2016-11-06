(function () {

  "use strict";

  angular.module("app")
    .directive("pageHeader", pageHeader);

  function pageHeader () {
    return {
      templateUrl: "components/page-header/page-header.html"
    }
  }

})();