(function () {

  "use strict";

  angular.module("app")
    .factory("todoService", todoService);

  function todoService () {
    var self = this;

    self.editToggle = false;

    //API
    return {
      Item,
      addNewItem,
      deleteItem,
      editMode,
      editItem,
      saveEditedItem,
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

    function editMode () {
      return self.editToggle ? true : false;
    }


    function editItem (item) {
      self.newItem = angular.copy(item);

      self.editToggle = !self.editToggle;
      editMode();

      angular.forEach(items, (item, key) => {
        if (item.id === itemId) {
          self.inputItem = item;
          Item();
          console.log(Item());
        }
      });
    }

    function saveEditedItem () {
      angular.forEach(items, (item, key) => {
        if (item.id === itemId) {
          items.splice(key, 1);
        }
      });

      self.editToggle = false;
      editMode();
    }

    function Item () {
      return self.inputItem; // ||
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
