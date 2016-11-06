(function () {

  "use strict";

  angular.module("app")
    .factory("todoService", todoService);

  function todoService () {
    //API
    return {
      addNewItem,
      deleteItem,
      incompleteCount,
      warningLevel
    };

    function addNewItem (items, newItem) {
      if (newItem && newItem.action) {
        items.push({
          id: items.length + 1,
          action: newItem.action,
          done: false,
          deadline: newItem.deadline,
          responsible: newItem.responsible,
          estimation: newItem.estimation
        });
        console.log(items);
        newItem.action = "";
      }
    }

    function deleteItem (items, itemId) {
      angular.forEach(items, (item, key) => {
        if (item.id === itemId) {
          items.splice(key, 1);
        }
      });
    }

    function incompleteCount (items) {
      let count = 0;

      angular.forEach(items, (item) => {
        if (!item.done) count++;
      });

      return count;
    }

    function warningLevel (items) {
      return incompleteCount(items) < 3
        ? "label-success"
        : "label-warning";
    }
  }

})();
