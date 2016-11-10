(function () {

  "use strict";

  angular.module("app")
    .factory("todoService", todoService);

  function todoService ($rootScope, todoListService) {
    var self = this;

    self.editToggle = false;

    //API
    return {
      addNewItem,
      deleteItem,
      editMode,
      editItem,
      editedItem,
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
        clearForm(newItem);
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

      $rootScope.$emit('edit-item');

    }

    function saveEditedItem (items, editItem) {

      var editedItems = [];

      angular.forEach(items, (item, key) => {
        if (item.id === editItem.id) {
          item = angular.copy(editItem);
          console.log(item);
        }
        editedItems.push(item);
      });

      self.editToggle = false;
      editMode();
      todoListService.setTodoList(editedItems);

      console.log(editedItems);
    }

    function editedItem () {
      console.log('editedItem() ', self.newItem);
      return self.newItem ? self.newItem : null;
    }

    function clearForm (item) {
      console.log(item);
      for ( var property in item ) {
        delete item.property;
      }
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
